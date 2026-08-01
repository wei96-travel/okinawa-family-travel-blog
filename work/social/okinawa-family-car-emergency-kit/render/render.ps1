Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$output = Join-Path $PSScriptRoot 'png'
$baseImage = Join-Path $root 'images\slide-01-base.png'
New-Item -ItemType Directory -Force -Path $output | Out-Null

$font = 'Microsoft JhengHei'
$white = [System.Drawing.Color]::FromArgb(248,250,252)
$muted = [System.Drawing.Color]::FromArgb(226,232,240)
$amber = [System.Drawing.Color]::FromArgb(251,191,36)

function New-Slide($index, $background, $eyebrow, $headline, $body, $cards, $kind) {
  $bmp = [System.Drawing.Bitmap]::new(1080,1350)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.TextRenderingHint = 'AntiAliasGridFit'
  $g.Clear($background)
  $g.FillEllipse(([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(48,255,255,255))), 680, 100, 520, 520)
  $g.FillEllipse(([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(35,103,232,249))), -150, 935, 460, 460)

  if ($kind -eq 'car') {
    $source = [System.Drawing.Image]::FromFile($baseImage)
    $g.DrawImage($source, [System.Drawing.Rectangle]::new(0,0,1080,1350))
    $source.Dispose()
    $g.FillRectangle(([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(188,3,35,54))),0,0,1080,1350)
  }

  $g.DrawString('沖繩親子自駕', ([System.Drawing.Font]::new($font,28,[System.Drawing.FontStyle]::Bold)), ([System.Drawing.SolidBrush]::new($white)), 82, 58)
  $g.DrawString(('{0:00} / 08' -f $index), ([System.Drawing.Font]::new($font,28,[System.Drawing.FontStyle]::Bold)), ([System.Drawing.SolidBrush]::new($white)), 864, 58)
  $g.DrawLine(([System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(135,255,255,255),2)), 82, 116, 998, 116)
  $g.DrawString($eyebrow, ([System.Drawing.Font]::new($font,30,[System.Drawing.FontStyle]::Bold)), ([System.Drawing.SolidBrush]::new($amber)), 82, 186)
  $g.DrawString($headline, ([System.Drawing.Font]::new($font,54,[System.Drawing.FontStyle]::Bold)), ([System.Drawing.SolidBrush]::new($white)), [System.Drawing.RectangleF]::new(82,242,885,300))
  $g.DrawString($body, ([System.Drawing.Font]::new($font,33)), ([System.Drawing.SolidBrush]::new($muted)), [System.Drawing.RectangleF]::new(82,548,750,190))

  $y = 780
  foreach ($card in $cards) {
    $g.FillRectangle(([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(45,255,255,255))), 82, $y, 916, 112)
    $g.DrawString($card, ([System.Drawing.Font]::new($font,32,[System.Drawing.FontStyle]::Bold)), ([System.Drawing.SolidBrush]::new($white)), [System.Drawing.RectangleF]::new(112,$y + 28,845,65))
    $y += 132
  }

  if ($kind -ne 'car') {
    $g.FillEllipse(([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255,251,146,60))), 785, 1000, 160, 160)
    $g.FillRectangle(([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255,125,211,252))), 765, 1120, 230, 74)
    $g.FillRectangle(([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255,251,191,36))), 810, 955, 110, 82)
  }

  $g.DrawString('okinawafamilynotes.com', ([System.Drawing.Font]::new($font,22)), ([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(200,224,242,254))), 692, 1281)
  $bmp.Save((Join-Path $output ('{0:00}.png' -f $index)), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}

New-Slide 1 ([System.Drawing.Color]::FromArgb(3,35,54)) '孩子突然說想上廁所時' "最急的常常不是尿急，`n是東西全在行李廂。" '一個放在車內固定位置的小包，讓你停好車後就能立刻處理。' @('濕紙巾・替換衣物・防水墊・夾鏈袋') 'car'
New-Slide 2 ([System.Drawing.Color]::FromArgb(7,59,76)) '先記住這個界線' "備用包不是`n冒險停車的理由。" '用品只在安全停妥後處理孩子需求；高速公路路肩尤其不該是預設方案。' @('行駛中不使用便盆或尿袋','先找合法、安全的停靠點') 'plain'
New-Slide 3 ([System.Drawing.Color]::FromArgb(11,53,85)) '先放這三樣' "小而常用的`n收尾工具" '先解決濕衣、髒污和座椅清潔，車內就不會越來越亂。' @('01 濕紙巾：小包裝，另留未拆備份','02 夾鏈袋：濕衣和髒紙巾先密封','03 防水墊：保護座椅，不是防漏保證') 'plain'
New-Slide 4 ([System.Drawing.Color]::FromArgb(76,29,62)) '衣服濕了，比想像中快' "一套替換衣物`n就很夠用。" '上衣、褲子、內褲或尿布，再加一件薄罩衫；海邊和下雨天尤其實用。' @('濕衣別在冷氣車裡撐著','不用為備用包帶整個旅行衣櫃') 'plain'
New-Slide 5 ([System.Drawing.Color]::FromArgb(49,46,129)) '便盆類用品，不是人人都需要' "先看孩子能不能`n穩定使用" '是否準備取決於如廁階段、能否安全停車，以及產品是否真的合適。' @('看適用年齡、承重、容量與清潔方式','孩子抗拒或需一直扶著，就未必適合') 'plain'
New-Slide 6 ([System.Drawing.Color]::FromArgb(124,45,18)) '尿袋是最後一道備案' "只限安全停好車後`n的短暫情況。" '每個產品的容量、密封、適用年齡和防漏限制不同，請以包裝標示為準。' @('不要在行進中的車內操作','用完封好，依停靠處規則處理') 'plain'
New-Slide 7 ([System.Drawing.Color]::FromArgb(22,78,99)) '出發前花 30 秒' "這樣檢查`n就好" '帶出門前快速看一次，減少每次都翻行李廂的慌張。' @('□ 濕紙巾還沒乾','□ 替換衣物符合天氣','□ 備用包固定好、不影響駕駛') 'plain'
New-Slide 8 ([System.Drawing.Color]::FromArgb(8,52,68)) '存起來，出發前看一次' "車上備用包`n6 樣就夠用" '想看用品的使用界線、尿急時的安全原則，以及休息點怎麼安排？' @('回網站看完整整理 →','搜尋「沖繩親子自駕 車上備用包」') 'plain'
