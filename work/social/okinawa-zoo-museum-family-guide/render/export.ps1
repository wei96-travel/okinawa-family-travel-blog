Add-Type -AssemblyName System.Drawing

$out = Split-Path -Parent $PSCommandPath
$project = (Resolve-Path (Join-Path $out '..\..\..\..')).Path
$photos = @(
  'public/images/articles/okinawa-zoo-museum-family-guide/okinawa-zoo-museum-family-guide-ai-v2.png',
  'public/images/articles/okinawa-zoo-museum-family-guide/okinawa-zoo-rest-ai-v2.png',
  'public/images/articles/okinawa-zoo-museum-family-guide/okinawa-zoo-museum-indoor-ai-v2.png'
)
$slides = @(
  @{tag='雨天行程'; title='下雨就刪動物園？'; body='沖繩兒童王國不是全室內，但能在戶外、休息與室內之間切換。'; note='先別急著整站刪掉'},
  @{tag='先看安全'; title='先看風，不只看雨'; body='遇到強風、警報或臨時休園，以園方公告為準；一般短暫陣雨才有調整空間。'; note='降雨機率不是唯一判斷'},
  @{tag='先選重點'; title='別一進園就走到底'; body='精神好時，先挑孩子最想看的兩三區，不必把完整一圈當成任務。'; note='留體力給吃飯與室內'},
  @{tag='室內節奏'; title='室內館放在中段'; body='吃飯休息後再進神奇博物館，別等孩子已經累透才想起室內備案。'; note='室內館會比園區早 30 分鐘關閉'},
  @{tag='可以直接刪'; title='累了就砍公園區'; body='遊樂設施與體驗活動是加碼，不是今天非完成不可的第三個行程。'; note='能縮短，才是真的備案'},
  @{tag='隱形成本'; title='推車也會累'; body='車位到入口、園內步行、哺乳與上廁所都要時間；有停車場不等於立刻進園。'; note='把走路一起算進車程'},
  @{tag='那霸來回'; title='只排一個主行程'; body='從那霸當天來回，就別再加另一個遠景點。孩子的體力不只花在景點裡。'; note='回程精神也要保留'},
  @{tag='雨天決策'; title='收藏這個順序'; body='查公告 → 看風雨 → 戶外挑重點 → 吃飯休息 → 進室內 → 累了離園。'; note='完整攻略在個人檔案網站連結'}
)

function Draw-Cover($g, $imagePath) {
  $source = [Drawing.Image]::FromFile($imagePath)
  $scale = [Math]::Max(1080 / $source.Width, 1350 / $source.Height)
  $width = [int]($source.Width * $scale)
  $height = [int]($source.Height * $scale)
  $x = [int]((1080 - $width) / 2)
  $y = [int]((1350 - $height) / 2)
  $g.DrawImage($source, $x, $y, $width, $height)
  $source.Dispose()
}

function Text($g, $value, $font, $brush, $rect, $format) { $g.DrawString($value, $font, $brush, $rect, $format) }

for ($i = 0; $i -lt $slides.Count; $i++) {
  $s = $slides[$i]
  $bmp = New-Object Drawing.Bitmap 1080,1350
  $g = [Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.TextRenderingHint = 'ClearTypeGridFit'
  Draw-Cover $g (Join-Path $project $photos[$i % $photos.Count])
  $g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(165, 12, 39, 29)), 0, 0, 1080, 1350)
  $g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(195, 12, 39, 29)), 0, 0, 1080, 180)
  $g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(215, 12, 39, 29)), 58, 780, 964, 350)
  $white = [Drawing.SolidBrush]::new([Drawing.Color]::White)
  $muted = [Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(245, 242, 220))
  $gold = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#FFDC75'))
  $fHead = [Drawing.Font]::new('Microsoft JhengHei', 26, [Drawing.FontStyle]::Bold)
  $fTag = [Drawing.Font]::new('Microsoft JhengHei', 30, [Drawing.FontStyle]::Bold)
  $fTitle = [Drawing.Font]::new('Microsoft JhengHei', 70, [Drawing.FontStyle]::Bold)
  $fBody = [Drawing.Font]::new('Microsoft JhengHei', 35)
  $fNote = [Drawing.Font]::new('Microsoft JhengHei', 29, [Drawing.FontStyle]::Bold)
  $fmt = [Drawing.StringFormat]::new(); $fmt.Trimming = 'EllipsisWord'
  Text $g '沖繩親子旅遊筆記' $fHead $white ([Drawing.RectangleF]::new(58, 67, 630, 50)) $fmt
  Text $g ('0{0} / 08' -f ($i + 1)) $fHead $white ([Drawing.RectangleF]::new(855, 67, 170, 50)) $fmt
  Text $g $s.tag $fTag $gold ([Drawing.RectangleF]::new(58, 220, 880, 55)) $fmt
  Text $g $s.title $fTitle $white ([Drawing.RectangleF]::new(58, 300, 900, 245)) $fmt
  Text $g $s.body $fBody $muted ([Drawing.RectangleF]::new(95, 830, 850, 170)) $fmt
  Text $g $s.note $fNote $gold ([Drawing.RectangleF]::new(95, 1035, 850, 55)) $fmt
  Text $g 'okinawafamilynotes.com' $fHead $muted ([Drawing.RectangleF]::new(58, 1240, 850, 45)) $fmt
  $bmp.Save((Join-Path $out ('{0:D2}.png' -f ($i + 1))), [Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}

$preview = New-Object Drawing.Bitmap 390,3904
$previewGraphics = [Drawing.Graphics]::FromImage($preview)
for ($i = 1; $i -le 8; $i++) { $source = [Drawing.Image]::FromFile((Join-Path $out ('{0:D2}.png' -f $i))); $previewGraphics.DrawImage($source, 0, (($i - 1) * 488), 390, 488); $source.Dispose() }
$preview.Save((Join-Path $out 'mobile-preview.png'), [Drawing.Imaging.ImageFormat]::Png)
$previewGraphics.Dispose(); $preview.Dispose()
