$ErrorActionPreference = 'Stop'

$ffmpeg = Get-ChildItem 'C:\AI' -Recurse -Filter 'ffmpeg.exe' -ErrorAction SilentlyContinue |
  Where-Object { $_.FullName -like '*ffmpeg-static*' } |
  Select-Object -First 1 -ExpandProperty FullName
if (-not $ffmpeg) { throw 'ffmpeg.exe was not found' }
$output = Join-Path $PSScriptRoot 'output'
$frames = Join-Path $output 'frames\frame-%04d.png'
$voice = Join-Path $output 'voice.wav'
$music = Get-ChildItem 'C:\AI' -Recurse -Filter 'okinawa-light-music-02.mp3' -ErrorAction SilentlyContinue |
  Select-Object -First 1 -ExpandProperty FullName
if (-not $music) { throw 'Background music was not found' }
$final = Join-Path $output 'okinawa-north-sleeping-child-reel-v1.mp4'

if (Test-Path $voice) { Remove-Item -LiteralPath $voice -Force }
& cscript.exe //nologo (Join-Path $PSScriptRoot 'make-voice.vbs') $voice
if ($LASTEXITCODE -ne 0) { throw 'Voice generation failed' }
if ((Get-Item -LiteralPath $voice).Length -lt 1000) { throw 'Voice file is empty' }

$filter = @"
[0:v]fps=30,scale=1080:1920:flags=lanczos,setsar=1[vout];
[1:a]adelay=250|250,highpass=f=90,lowpass=f=12000,loudnorm=I=-16:TP=-1.5:LRA=7,apad=pad_dur=15[voice];
[2:a]atrim=0:15,afade=t=in:st=0:d=0.3,afade=t=out:st=14.2:d=0.8,volume=0.08[music];
[voice][music]amix=inputs=2:duration=first:dropout_transition=0,atrim=0:15[aout]
"@ -replace "`r?`n", ''

& $ffmpeg -y -hide_banner -loglevel warning -framerate 15 -i $frames -i $voice -stream_loop -1 -i $music -filter_complex $filter -map '[vout]' -map '[aout]' -t 15 -r 30 -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -c:a aac -b:a 160k -movflags +faststart $final
if ($LASTEXITCODE -ne 0) { throw 'Video render failed' }

Write-Output $final
