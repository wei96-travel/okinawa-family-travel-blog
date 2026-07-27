Add-Type -AssemblyName System.Drawing

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$photos = @(
  (Join-Path $root 'public/images/articles/okinawa-rental-car-luggage-stroller-guide/rental-luggage-stroller-cover.png'),
  (Join-Path $root 'public/images/articles/okinawa-rental-car-luggage-stroller-guide/car-seat-interior.png'),
  (Join-Path $root 'public/images/articles/okinawa-rental-car-luggage-stroller-guide/packing-layout.png')
)
$sets = @(
  @{ Slug='okinawa-rental-car-luggage-stroller-guide'; PreviewSlug='okinawa-rental-car-luggage-stroller-carousel'; Tag='沖繩親子租車'; Cards=@(
    @('後車廂不是魔術箱','兩大一小不代表租 5 人座就一定夠。','先算汽座、推車與行李'),
    @('先把不會消失的東西列出來','人數、汽座、推車收折尺寸、行李箱，少一個都會誤判。','不要只看可坐幾人'),
    @('兩張汽座，先想第三排','汽座會影響進出與座位配置；訂車前要先問。','先問能否指定座位數'),
    @('7 人座不等於行李更多','第三排立起後，後車廂可能反而縮小。','看「坐滿後」的空間'),
    @('推車量收折後三個數字','長、寬、高一起量，連同行李尺寸給業者確認。','問能不能關上尾門'),
    @('取車現場先試裝 5 分鐘','先汽座、再最大行李、最後推車；關一次尾門再出發。','放不下要在營業所就問'),
    @('路上會用的東西別壓最底','尿布包、水、雨具留在好拿的位置。','後車廂也要留撤退空間'),
    @('收藏這張','先算人、汽座、推車、行李，再選車。完整攻略在網站。','沖繩親子旅遊筆記') ) },
  @{ Slug='okinawa-family-stroller-guide'; PreviewSlug='okinawa-family-stroller-carousel'; Tag='沖繩親子推車'; Cards=@(
    @('推車不是帶了就好','自駕很方便，但後車廂能不能關才是重點。','午睡備案也要放得下'),
    @('先看孩子，不只看年齡','還會午睡、走累討抱，推車才有明確用途。','不要為出國硬帶'),
    @('折起來再量一次','旅行前要量的是收折後的長、寬、高。','記下三個數字'),
    @('汽座會先吃掉座位','兩張汽座時，推車與第三排進出都要重算。','座位數不是舒適人數'),
    @('景點借用只是備案','數量、年齡和使用範圍都有限，不能當整趟計畫。','自己的推車更有彈性'),
    @('取車先做裝載測試','行李、推車、隨身包都裝一次，確認尾門能正常關。','別等到飯店才發現'),
    @('大的東西放後車廂','不要放在駕駛周邊，也別擋住後方視線。','安全比塞滿重要'),
    @('收藏這張','孩子會睡嗎？推車收折多大？車子放得下嗎？完整攻略在網站。','沖繩親子旅遊筆記') ) }
)

function Draw-Cover($g, $path) { $im=[Drawing.Image]::FromFile($path); $s=[Math]::Max(1080/$im.Width,1350/$im.Height); $w=[int]($im.Width*$s);$h=[int]($im.Height*$s);$g.DrawImage($im,[int]((1080-$w)/2),[int]((1350-$h)/2),$w,$h);$im.Dispose() }
function Save-WebPreview($source, $target) {
  $sourceImage = [Drawing.Image]::FromFile($source)
  $previewImage = New-Object Drawing.Bitmap 540,675
  $previewGraphics = [Drawing.Graphics]::FromImage($previewImage)
  $previewGraphics.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $previewGraphics.DrawImage($sourceImage, 0, 0, 540, 675)
  $jpegCodec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $encoderParams = New-Object Drawing.Imaging.EncoderParameters 1
  $encoderParams.Param[0] = New-Object Drawing.Imaging.EncoderParameter([Drawing.Imaging.Encoder]::Quality, 84L)
  $previewImage.Save($target, $jpegCodec, $encoderParams)
  $encoderParams.Dispose(); $previewGraphics.Dispose(); $previewImage.Dispose(); $sourceImage.Dispose()
}
foreach($set in $sets){
  $out=Join-Path $root ('work/social/'+$set.Slug+'/render'); New-Item -ItemType Directory -Force -Path $out|Out-Null
  for($i=0;$i -lt 8;$i++){
    $c=$set.Cards[$i];$bmp=New-Object Drawing.Bitmap 1080,1350;$g=[Drawing.Graphics]::FromImage($bmp);$g.SmoothingMode='AntiAlias';$g.TextRenderingHint='ClearTypeGridFit';Draw-Cover $g $photos[$i%3]
    $g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(150,4,24,38)),0,0,1080,1350);$g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(215,4,24,38)),0,0,1080,180);$g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(215,4,24,38)),55,740,970,405)
    $white=[Drawing.SolidBrush]::new([Drawing.Color]::White);$muted=[Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(242,239,234));$gold=[Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#F6D782'));$fmt=[Drawing.StringFormat]::new();$fmt.Trimming='EllipsisWord'
    $head=[Drawing.Font]::new('Microsoft JhengHei',27,[Drawing.FontStyle]::Bold);$tag=[Drawing.Font]::new('Microsoft JhengHei',31,[Drawing.FontStyle]::Bold);$title=[Drawing.Font]::new('Microsoft JhengHei',73,[Drawing.FontStyle]::Bold);$body=[Drawing.Font]::new('Microsoft JhengHei',37);$note=[Drawing.Font]::new('Microsoft JhengHei',30,[Drawing.FontStyle]::Bold)
    $g.DrawString('沖繩親子旅遊筆記',$head,$white,[Drawing.RectangleF]::new(58,66,620,48),$fmt);$g.DrawString(('0{0} / 08' -f ($i+1)),$head,$white,[Drawing.RectangleF]::new(855,66,175,48),$fmt);$g.DrawString($set.Tag,$tag,$gold,[Drawing.RectangleF]::new(58,220,880,55),$fmt);$g.DrawString($c[0],$title,$white,[Drawing.RectangleF]::new(58,300,910,250),$fmt);$g.DrawString($c[1],$body,$muted,[Drawing.RectangleF]::new(92,790,865,175),$fmt);$g.DrawString($c[2],$note,$gold,[Drawing.RectangleF]::new(92,1035,860,55),$fmt);$g.DrawString('okinawafamilynotes.com',$head,$muted,[Drawing.RectangleF]::new(58,1240,800,45),$fmt)
    $bmp.Save((Join-Path $out ('{0:D2}.png' -f ($i+1))),[Drawing.Imaging.ImageFormat]::Png);$g.Dispose();$bmp.Dispose()
  }
  $preview=New-Object Drawing.Bitmap 390,3904;$pg=[Drawing.Graphics]::FromImage($preview);for($i=1;$i -le 8;$i++){$im=[Drawing.Image]::FromFile((Join-Path $out ('{0:D2}.png' -f $i)));$pg.DrawImage($im,0,(($i-1)*488),390,488);$im.Dispose()};$preview.Save((Join-Path $out 'mobile-preview.png'),[Drawing.Imaging.ImageFormat]::Png);$pg.Dispose();$preview.Dispose()
  $webOut = Join-Path $root ('public/previews/'+$set.PreviewSlug)
  New-Item -ItemType Directory -Force -Path $webOut | Out-Null
  for($i=1;$i -le 8;$i++) {
    Save-WebPreview (Join-Path $out ('{0:D2}.png' -f $i)) (Join-Path $webOut ('{0:D2}.jpg' -f $i))
  }
}

