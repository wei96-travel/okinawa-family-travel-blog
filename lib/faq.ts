export type FaqEntry = {
  question: string;
  answer: string;
};

const FAQ_HEADING = /^##\s+frequently asked questions\s*$/i;

function toPlainText(value: string) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Reads the `## Frequently asked questions` section of an English article and
 * returns each `### question` with its answer paragraphs as plain text.
 * Returns an empty array when the article has no FAQ section.
 */
export function getFaqEntries(content: string): FaqEntry[] {
  const lines = content.split(/\r?\n/);
  const start = lines.findIndex((line) => FAQ_HEADING.test(line.trim()));

  if (start === -1) return [];

  const entries: FaqEntry[] = [];
  let question = "";
  let answerLines: string[] = [];

  const flush = () => {
    const answer = toPlainText(answerLines.join(" "));
    if (question && answer) entries.push({ question, answer });
    question = "";
    answerLines = [];
  };

  for (const line of lines.slice(start + 1)) {
    const trimmed = line.trim();

    if (/^##\s+/.test(trimmed) && !/^###\s+/.test(trimmed)) break;

    if (/^###\s+/.test(trimmed)) {
      flush();
      question = toPlainText(trimmed.replace(/^###\s+/, ""));
      continue;
    }

    if (!question || !trimmed) continue;

    answerLines.push(trimmed.replace(/^[-*]\s+/, ""));
  }

  flush();

  return entries;
}
