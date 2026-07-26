Add-Type -AssemblyName System.Drawing

$out = Split-Path -Parent $PSCommandPath
$slides = @(
  @{tag='沖繩親子單軌電車'; title='先別急著`n買一日券'; body='第一步不是選票，而是選今天的移動節奏。'; note='先決定路線，再決定票種'},
  @{tag='先問一題'; title='今天`n會開車嗎？'; body='跑北部、海灘或飯店行程，租車通常更順；住那霸、只跑市區，單軌才是好隊友。'; note='那霸市區才是它的主場'},
  @{tag='19 個車站'; title='不等於`n19 個景點'; body='只選一個主要區域，加一個能刪掉的備案。孩子累了，不必每一站都搭到。'; note='少一站，也可能更好玩'},
  @{tag='票種判斷'; title='只看：`n今天搭幾段？'; body='單程票、一日券、兩日券沒有哪一個必買。先把預計單程加總再比較。'; note='不要為了回本硬排路線'},
  @{tag='推車與行李'; title='把電梯也`n排進行程'; body='全線各站有電梯。先找出口和電梯，再進站；別在閘門前才開始收推車。'; note='走對出口，比快一班車重要'},
  @{tag='國際通動線'; title='不必從頭`n走到底'; body='選一端進場，設一個吃飯或休息點。孩子開始煩躁，就折返搭車。'; note='逛街也要有撤退點'},
  @{tag='還車日'; title='單軌是備用`n不是補救'; body='先守住租車公司的還車與接駁時間，再把單軌安排進機場移動。'; note='先還車，再想最後一站'},
  @{tag='收藏這張'; title='那霸移動`n三個問題'; body='今天會不會開車？要搭幾段？孩子需要推車還是午睡？'; note='完整攻略在網站'}
)

function Text($g,$text,$font,$brush,$rect,$format){ $g.DrawString($text,$font,$brush,$rect,$format) }
for($i=0;$i -lt $slides.Count;$i++){
  $s=$slides[$i]; $displayTitle=$s.title.Replace('`n',[Environment]::NewLine); $bmp=New-Object Drawing.Bitmap 1080,1350; $g=[Drawing.Graphics]::FromImage($bmp); $g.SmoothingMode='AntiAlias';
  $bg=if($i%3 -eq 0){'#0A304C'}elseif($i%3 -eq 1){'#146176'}else{'#287476'}; $g.Clear([Drawing.ColorTranslator]::FromHtml($bg));
  $white=[Drawing.SolidBrush]::new([Drawing.Color]::White); $muted=[Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(228,240,238)); $gold=[Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#F6D782'));
  $g.FillEllipse([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(45,255,255,255)),760,120,360,360); $g.DrawLine([Drawing.Pen]::new([Drawing.Color]::FromArgb(110,255,255,255),2),86,142,994,142);
  $fHead=[Drawing.Font]::new('Microsoft JhengHei',26,[Drawing.FontStyle]::Bold); $fTag=[Drawing.Font]::new('Microsoft JhengHei',30,[Drawing.FontStyle]::Bold); $fTitle=[Drawing.Font]::new('Microsoft JhengHei',78,[Drawing.FontStyle]::Bold); $fBody=[Drawing.Font]::new('Microsoft JhengHei',37); $fNote=[Drawing.Font]::new('Microsoft JhengHei',28,[Drawing.FontStyle]::Bold); $fmt=[Drawing.StringFormat]::new(); $fmt.Trimming='EllipsisWord';
  Text $g 'OKINAWA FAMILY NOTES' $fHead $white ([Drawing.RectangleF]::new(86,82,600,50)) $fmt; Text $g ('0{0} / 08' -f ($i+1)) $fHead $white ([Drawing.RectangleF]::new(835,82,160,50)) $fmt;
  Text $g $s.tag $fTag $gold ([Drawing.RectangleF]::new(86,205,800,55)) $fmt; Text $g $displayTitle $fTitle $white ([Drawing.RectangleF]::new(86,282,820,220)) $fmt; Text $g $s.body $fBody $muted ([Drawing.RectangleF]::new(86,540,800,235)) $fmt; Text $g $s.note $fNote $gold ([Drawing.RectangleF]::new(86,790,820,55)) $fmt;
  $pen=[Drawing.Pen]::new([Drawing.ColorTranslator]::FromHtml('#F6D782'),16); $g.DrawLine($pen,110,1120,970,1120); if($i%4 -eq 0){$g.FillRectangle($white,210,950,650,135);$g.FillRectangle([Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#146176')),255,980,135,48);$g.FillRectangle([Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#146176')),440,980,135,48);$g.FillRectangle([Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#146176')),625,980,135,48)}elseif($i%4 -eq 1){$g.DrawRectangle($pen,190,910,700,170);Text $g '今天要搭幾段？' $fTitle $gold ([Drawing.RectangleF]::new(250,950,570,95)) $fmt}elseif($i%4 -eq 2){$g.DrawEllipse($pen,235,930,110,110);$g.DrawEllipse($pen,650,930,110,110);$g.DrawLine($pen,290,930,400,865);$g.DrawLine($pen,400,865,565,865);$g.DrawLine($pen,565,865,705,1040)}else{$g.DrawString('✓',$fTitle,$gold,440,900)}
  Text $g 'okinawafamilynotes.com｜本站自製資訊圖' $fHead $muted ([Drawing.RectangleF]::new(86,1240,760,45)) $fmt; $bmp.Save((Join-Path $out ('{0:D2}.png' -f ($i+1))),[Drawing.Imaging.ImageFormat]::Png); $g.Dispose();$bmp.Dispose()
}
$preview = New-Object Drawing.Bitmap 390,3904
$previewGraphics = [Drawing.Graphics]::FromImage($preview)
for($i=1;$i -le 8;$i++){ $source=[Drawing.Image]::FromFile((Join-Path $out ('{0:D2}.png' -f $i))); $previewGraphics.DrawImage($source,0,(($i-1)*488),390,488); $source.Dispose() }
$preview.Save((Join-Path $out 'mobile-preview.png'),[Drawing.Imaging.ImageFormat]::Png)
$previewGraphics.Dispose(); $preview.Dispose()



