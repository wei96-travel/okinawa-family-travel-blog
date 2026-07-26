Add-Type -AssemblyName System.Drawing

$out = Split-Path -Parent $PSCommandPath
$project = (Resolve-Path (Join-Path $out '..\..\..\..')).Path
$photos = @(
  'public/images/articles/okinawa-yui-rail-family-guide/yui-rail-family-guide-ai-v2.png',
  'public/images/articles/okinawa-yui-rail-family-guide/yui-rail-elevator-ai-v2.png',
  'public/images/articles/okinawa-yui-rail-family-guide/yui-rail-carriage-ai-v2.png'
)
$slides = @(
  @{tag='沖繩親子單軌電車'; title='先別急著買一日券'; body='第一步不是選票，而是選今天的移動節奏。'; note='先決定路線，再決定票種'},
  @{tag='先問一題'; title='今天會開車嗎？'; body='跑北部、海灘或飯店行程，租車通常更順；住那霸、只跑市區，單軌才是好隊友。'; note='那霸市區才是它的主場'},
  @{tag='19 個車站'; title='不等於 19 個景點'; body='只選一個主要區域，加一個能刪掉的備案。孩子累了，不必每一站都搭到。'; note='少一站，也可能更好玩'},
  @{tag='票種判斷'; title='只看今天搭幾段'; body='單程票、一日券、兩日券沒有哪一個必買。先把預計單程加總再比較。'; note='不要為了回本硬排路線'},
  @{tag='推車與行李'; title='把電梯也排進行程'; body='先找出口和電梯，再進站；別在閘門前才開始收推車。'; note='走對出口，比快一班車重要'},
  @{tag='國際通動線'; title='不必從頭走到底'; body='選一端進場，設一個吃飯或休息點。孩子開始煩躁，就折返搭車。'; note='逛街也要有撤退點'},
  @{tag='還車日'; title='單軌是備用不是補救'; body='先守住租車公司的還車與接駁時間，再把單軌排進機場移動。'; note='先還車，再想最後一站'},
  @{tag='收藏這張'; title='那霸移動三個問題'; body='今天會不會開車？要搭幾段？孩子需要推車還是午睡？'; note='完整攻略在網站'}
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
  $g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(160, 5, 25, 38)), 0, 0, 1080, 1350)
  $g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(190, 5, 25, 38)), 0, 0, 1080, 180)
  $g.FillRectangle([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(210, 5, 25, 38)), 58, 780, 964, 350)
  $white = [Drawing.SolidBrush]::new([Drawing.Color]::White)
  $muted = [Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(242, 239, 234))
  $gold = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#F6D782'))
  $fHead = [Drawing.Font]::new('Microsoft JhengHei', 26, [Drawing.FontStyle]::Bold)
  $fTag = [Drawing.Font]::new('Microsoft JhengHei', 30, [Drawing.FontStyle]::Bold)
  $fTitle = [Drawing.Font]::new('Microsoft JhengHei', 72, [Drawing.FontStyle]::Bold)
  $fBody = [Drawing.Font]::new('Microsoft JhengHei', 36)
  $fNote = [Drawing.Font]::new('Microsoft JhengHei', 29, [Drawing.FontStyle]::Bold)
  $fmt = [Drawing.StringFormat]::new(); $fmt.Trimming = 'EllipsisWord'
  Text $g 'OKINAWA FAMILY NOTES' $fHead $white ([Drawing.RectangleF]::new(58, 67, 630, 50)) $fmt
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
