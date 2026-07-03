type ArticleTocProps = {
  headings: string[];
};

export function ArticleToc({ headings }: ArticleTocProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="mt-8 rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-5">
      <p className="text-sm font-semibold text-[#694624]">這篇文章會看到</p>
      <ol className="mt-3 space-y-2 text-sm leading-7 text-[#5f594f]">
        {headings.map((heading) => (
          <li key={heading}>{heading}</li>
        ))}
      </ol>
    </aside>
  );
}
