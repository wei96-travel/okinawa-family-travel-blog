Add-Type -AssemblyName System.Drawing

$out = Split-Path -Parent $PSCommandPath
$project = (Resolve-Path (Join-Path $out '..\..\..\..')).Path
$photos = @(
  'public/images/articles/okinawa-zoo-museum-family-guide/okinawa-zoo-museum-family-guide-ai-v2.png',
  'public/images/articles/okinawa-zoo-museum-family-guide/okinawa-zoo-rest-ai-v2.png',
  'public/images/articles/okinawa-zoo-museum-family-guide/okinawa-zoo-museum-indoor-ai-v2.png'
)
$slides = @(
  @{tag='沖繩兒童王國'; title='雨天去動物園不一定白跑'; body='戶外動物區之外，還有室內神奇博物館能調整節奏。'; note='關鍵是能切換，不是全玩完'},
  @{tag='先抓一個主行程'; title='中部一天不要塞太滿'; body='孩子還小、從那霸來回，先抓半天或一天的一個重點，不要再加遠景點。'; note='交通也是孩子的體力成本'},
  @{tag='三段切著玩'; title='動物 → 休息 → 室內'; body='精神好時看動物；吃飯休息；再進室內。公園區留給還有體力的下午。'; note='留白，才有調整空間'},
  @{tag='室內備案'; title='神奇博物館別拖到最後'; body='它適合雨天與炎熱天，但會比園區閉園早 30 分鐘，別壓最後一刻。'; note='先把室內段留在中間'},
  @{tag='前一晚確認'; title='開園與活動再看一次'; body='票價、動物展示與天候措施都可能調整，請以園方當日公告為準。'; note='截圖不能取代當日公告'},
  @{tag='走路成本'; title='推車、哺乳、停車都要算'; body='園方有幼兒設施、哺乳室與數量有限的推車租借；假日停車也要留時間。'; note='有停車場，不等於立刻停好'},
  @{tag='那霸來回'; title='別再多塞一個遠景點'; body='車程、找車位、下車與休息，都比導航上的分鐘數更耗精神。'; note='把它當今天唯一主題'},
  @{tag='收藏這張'; title='雨天與炎熱天決策順序'; body='先查公告 → 先排戶外 → 留室內切換 → 孩子累了就縮短。'; note='完整攻略在網站'}
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
