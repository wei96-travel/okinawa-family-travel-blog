Add-Type -AssemblyName System.Drawing

$out = Split-Path -Parent $PSCommandPath
$slides = @(
  @{tag='沖繩兒童王國'; title='雨天去動物園`n不一定白跑'; body='戶外動物區之外，還有室內神奇博物館能調整節奏。'; note='關鍵是能切換，不是全玩完'},
  @{tag='先抓一個主行程'; title='中部一天`n不要塞太滿'; body='孩子還小、從那霸來回，先抓半天或一天的一個重點，不要再加遠景點。'; note='交通也是孩子的體力成本'},
  @{tag='三段切著玩'; title='動物 → 休息`n→ 室內'; body='精神好時看動物；吃飯休息；再進室內。公園區留給還有體力的下午。'; note='留白，才有調整空間'},
  @{tag='室內備案'; title='神奇博物館`n別拖到最後'; body='它適合雨天與炎熱天，但會比園區閉園早 30 分鐘，別壓最後一刻。'; note='先把室內段留在中間'},
  @{tag='前一晚確認'; title='開園與活動`n再看一次'; body='票價、動物展示與天候措施都可能調整，請以園方當日公告為準。'; note='截圖不能取代當日公告'},
  @{tag='走路成本'; title='推車、哺乳`n停車都要算'; body='園方有幼兒設施、哺乳室與數量有限的推車租借；假日停車也要留時間。'; note='有停車場，不等於立刻停好'},
  @{tag='那霸來回'; title='別再多塞`n一個遠景點'; body='車程、找車位、下車與休息，都比導航上的分鐘數更耗精神。'; note='把它當今天唯一主題'},
  @{tag='收藏這張'; title='雨天與炎熱天`n決策順序'; body='先查公告 → 先排戶外 → 留室內切換 → 孩子累了就縮短。'; note='完整攻略在網站'}
)

function Text($g,$text,$font,$brush,$rect,$format){ $g.DrawString($text,$font,$brush,$rect,$format) }
for($i=0;$i -lt $slides.Count;$i++){
  $s=$slides[$i]; $displayTitle=$s.title.Replace('`n',[Environment]::NewLine); $bmp=New-Object Drawing.Bitmap 1080,1350; $g=[Drawing.Graphics]::FromImage($bmp); $g.SmoothingMode='AntiAlias';
  $bg=if($i%3 -eq 0){'#164437'}elseif($i%3 -eq 1){'#32745B'}else{'#17606A'}; $g.Clear([Drawing.ColorTranslator]::FromHtml($bg));
  $white=[Drawing.SolidBrush]::new([Drawing.Color]::White); $muted=[Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(234,242,220)); $gold=[Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#FFDC75'));
  $g.FillEllipse([Drawing.SolidBrush]::new([Drawing.Color]::FromArgb(45,255,255,255)),760,120,360,360); $g.DrawLine([Drawing.Pen]::new([Drawing.Color]::FromArgb(110,255,255,255),2),86,142,994,142);
  $fHead=[Drawing.Font]::new('Microsoft JhengHei',26,[Drawing.FontStyle]::Bold); $fTag=[Drawing.Font]::new('Microsoft JhengHei',30,[Drawing.FontStyle]::Bold); $fTitle=[Drawing.Font]::new('Microsoft JhengHei',76,[Drawing.FontStyle]::Bold); $fBody=[Drawing.Font]::new('Microsoft JhengHei',37); $fNote=[Drawing.Font]::new('Microsoft JhengHei',28,[Drawing.FontStyle]::Bold); $fmt=[Drawing.StringFormat]::new();$fmt.Trimming='EllipsisWord';
  Text $g 'OKINAWA FAMILY NOTES' $fHead $white ([Drawing.RectangleF]::new(86,82,600,50)) $fmt; Text $g ('0{0} / 08' -f ($i+1)) $fHead $white ([Drawing.RectangleF]::new(835,82,160,50)) $fmt;
  Text $g $s.tag $fTag $gold ([Drawing.RectangleF]::new(86,205,800,55)) $fmt; Text $g $displayTitle $fTitle $white ([Drawing.RectangleF]::new(86,282,820,220)) $fmt; Text $g $s.body $fBody $muted ([Drawing.RectangleF]::new(86,540,800,235)) $fmt; Text $g $s.note $fNote $gold ([Drawing.RectangleF]::new(86,790,820,55)) $fmt;
  $pen=[Drawing.Pen]::new([Drawing.ColorTranslator]::FromHtml('#FFDC75'),16);if($i%4 -eq 0){$g.FillEllipse($gold,210,900,155,155);$g.FillEllipse($gold,620,900,155,155);$g.DrawLine($pen,290,1075,700,1075)}elseif($i%4 -eq 1){$g.DrawRectangle($pen,180,900,720,175);Text $g '戶外  ↔  室內' $fTitle $gold ([Drawing.RectangleF]::new(240,945,600,85)) $fmt}elseif($i%4 -eq 2){$g.FillRectangle($white,400,850,140,250);$g.FillEllipse($gold,370,780,200,200);$g.FillEllipse([Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#A56D35')),440,850,40,40);$g.FillEllipse([Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#A56D35')),470,930,40,40)}else{$g.DrawString('✓',$fTitle,$gold,440,900)}
  Text $g 'okinawafamilynotes.com｜本站自製資訊圖' $fHead $muted ([Drawing.RectangleF]::new(86,1240,760,45)) $fmt; $bmp.Save((Join-Path $out ('{0:D2}.png' -f ($i+1))),[Drawing.Imaging.ImageFormat]::Png); $g.Dispose();$bmp.Dispose()
}
$preview = New-Object Drawing.Bitmap 390,3904
$previewGraphics = [Drawing.Graphics]::FromImage($preview)
for($i=1;$i -le 8;$i++){ $source=[Drawing.Image]::FromFile((Join-Path $out ('{0:D2}.png' -f $i))); $previewGraphics.DrawImage($source,0,(($i-1)*488),390,488); $source.Dispose() }
$preview.Save((Join-Path $out 'mobile-preview.png'),[Drawing.Imaging.ImageFormat]::Png)
$previewGraphics.Dispose(); $preview.Dispose()



