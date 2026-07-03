function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (match) {
      return (
        <a href={match[2]} key={index} rel="noreferrer" target="_blank">
          {match[1]}
        </a>
      );
    }

    return renderBold(part);
  });
}

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = content.trim().split(/\n\s*\n/g);

  return (
    <div className="prose-travel mt-8">
      {blocks.map((block, index) => {
        const lines = block.split("\n");
        const firstLine = lines[0];

        if (firstLine.startsWith("### ")) {
          return <h3 key={index}>{renderInline(firstLine.replace(/^### /, ""))}</h3>;
        }

        if (firstLine.startsWith("## ")) {
          return <h2 key={index}>{renderInline(firstLine.replace(/^## /, ""))}</h2>;
        }

        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={index}>
              {lines.map((line) => (
                <li key={line}>{renderInline(line.replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }

        if (lines.every((line) => /^\d+\. /.test(line))) {
          return (
            <ol key={index}>
              {lines.map((line) => (
                <li key={line}>{renderInline(line.replace(/^\d+\. /, ""))}</li>
              ))}
            </ol>
          );
        }

        if (firstLine.startsWith("> ")) {
          return <blockquote key={index}>{renderInline(block.replace(/^> /gm, ""))}</blockquote>;
        }

        return <p key={index}>{renderInline(block.replace(/\n/g, " "))}</p>;
      })}
    </div>
  );
}
