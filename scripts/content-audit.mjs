import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const postsDir = path.join(root, "content", "blog");
const strict = process.argv.includes("--strict");

const criticalRules = [
  {
    id: "AI_RESIDUE",
    pattern: /turn\d+(?:search|view|news)\d+|utm_source=(?:chatgpt|openai|copilot)|referrer=grok/i,
    message: "含 AI 工具殘碼或追蹤參數"
  },
  {
    id: "PLACEHOLDER",
    pattern: /\[(?:在這裡|請填入|待補|產品名稱|品牌名稱)[^\]]*\]|(?:XX|XXX)\s*(?:公司|品牌|產品)/i,
    message: "可能含未完成的模板佔位文字"
  },
  {
    id: "GENERIC_VINEGAR",
    pattern: /被(?:水母|海洋生物)(?:螫|刺)[^。\n]{0,35}(?:用|倒|帶)(?:食用)?醋/,
    message: "水母處理不能把食用醋寫成通用方式；必須區分哈布水母與僧帽水母",
    skipLine: (line) => /^#{1,6}\s/.test(line.trim())
  },
  {
    id: "ABSOLUTE_FACILITY",
    pattern: /(?:每間|全部|所有).{0,8}(?:便利商店|海灘|飯店).{0,8}(?:都有|一定有|保證有)/,
    message: "設施描述過度絕對，需改成個別確認"
  }
];

const localizationRules = [
  ["視頻", "影片"],
  ["信息", "資訊"],
  ["網絡", "網路"],
  ["軟件", "軟體"],
  ["硬件", "硬體"],
  ["數據庫", "資料庫"],
  ["服務器", "伺服器"],
  ["屏幕", "螢幕"],
  ["鼠標", "滑鼠"],
  ["打印", "列印"],
  ["默認", "預設"],
  ["性價比", "CP 值"],
  ["顏值", "外型"],
  ["短視頻", "短影音"]
];

const typoRules = [
  ["遠淺", "水淺"],
  ["蟄到", "螫到"]
];

const styleRules = [
  ["FORMULA_CONCLUSION", /先說結論|這篇先(?:講|給)|本文會把重點|接下來(?:帶你|來看)/, "公式化導言"],
  ["NOT_A_BUT_B", /不是[^。！？\n]{1,55}而是/, "「不是 A，而是 B」句型"],
  ["LECTURE_TONE", /真正(?:要|的問題)|說到底|歸根究柢|本質上|核心在於|關鍵不在/, "說教式深度腔"],
  ["GUIDE_PHRASE", /你會發現|換句話說|這意味著|值得注意的是/, "解說導引句"],
  ["CANNED_ENDING", /總的來說|綜上所述|讓我們一起|未來充滿/, "罐頭式收尾"]
];

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

function excerpt(line) {
  const value = line.trim();
  return value.length > 110 ? `${value.slice(0, 107)}...` : value;
}

const files = fs
  .readdirSync(postsDir)
  .filter((file) => file.endsWith(".md"))
  .sort();

const findings = [];

for (const file of files) {
  const fullPath = path.join(postsDir, file);
  const text = fs.readFileSync(fullPath, "utf8");
  const lines = text.split("\n");

  for (const rule of criticalRules) {
    for (const match of text.matchAll(new RegExp(rule.pattern.source, `${rule.pattern.flags}g`))) {
      const line = lineNumber(text, match.index ?? 0);
      if (rule.skipLine?.(lines[line - 1] ?? "")) continue;
      findings.push({ severity: "critical", id: rule.id, file, line, message: rule.message, text: excerpt(lines[line - 1] ?? "") });
    }
  }

  for (const [term, replacement] of localizationRules) {
    let index = text.indexOf(term);
    while (index !== -1) {
      const line = lineNumber(text, index);
      findings.push({ severity: "critical", id: "TW_WORDING", file, line, message: `中國用語「${term}」建議改成「${replacement}」`, text: excerpt(lines[line - 1] ?? "") });
      index = text.indexOf(term, index + term.length);
    }
  }

  for (const [term, replacement] of typoRules) {
    let index = text.indexOf(term);
    while (index !== -1) {
      const line = lineNumber(text, index);
      findings.push({ severity: "critical", id: "TYPO", file, line, message: `疑似錯字「${term}」，建議改成「${replacement}」`, text: excerpt(lines[line - 1] ?? "") });
      index = text.indexOf(term, index + term.length);
    }
  }

  for (const [id, pattern, message] of styleRules) {
    for (const match of text.matchAll(new RegExp(pattern.source, `${pattern.flags}g`))) {
      const line = lineNumber(text, match.index ?? 0);
      findings.push({ severity: "style", id, file, line, message, text: excerpt(lines[line - 1] ?? "") });
    }
  }
}

const grouped = new Map();
for (const finding of findings) {
  const list = grouped.get(finding.file) ?? [];
  list.push(finding);
  grouped.set(finding.file, list);
}

console.log(`內容檢查：${files.length} 篇文章，${findings.length} 個提醒`);
console.log(`重大問題：${findings.filter((item) => item.severity === "critical").length}`);
console.log(`口吻問題：${findings.filter((item) => item.severity === "style").length}`);

for (const [file, items] of grouped) {
  console.log(`\n${file}`);
  for (const item of items) {
    console.log(`  [${item.severity.toUpperCase()}] L${item.line} ${item.id}：${item.message}`);
    console.log(`    ${item.text}`);
  }
}

if (strict && findings.some((item) => item.severity === "critical")) {
  process.exitCode = 1;
}
