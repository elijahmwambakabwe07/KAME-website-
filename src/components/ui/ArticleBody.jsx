import React from "react";

/**
 * Deliberately minimal — avoids pulling in a full markdown parser dependency
 * for a handful of formatting patterns. Supports:
 *   **Bold line** (rendered as a sub-heading)
 *   - bullet lists
 *   1. numbered lists
 *   blank-line-separated paragraphs
 */
export default function ArticleBody({ content }) {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="prose-kame space-y-5">
      {blocks.map((block, i) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);

        // Bold-only line → sub-heading
        if (lines.length === 1 && /^\*\*(.+)\*\*$/.test(lines[0])) {
          const text = lines[0].replace(/^\*\*|\*\*$/g, "");
          return (
            <h3 key={i} className="text-xl text-navy-700">
              {text}
            </h3>
          );
        }

        // Bullet list
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 text-ink-light">
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^- /, "")}</li>
              ))}
            </ul>
          );
        }

        // Numbered list
        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ol key={i} className="list-decimal space-y-2 pl-6 text-ink-light">
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^\d+\.\s/, "")}</li>
              ))}
            </ol>
          );
        }

        // Plain paragraph
        return (
          <p key={i} className="leading-relaxed text-ink-light">
            {block}
          </p>
        );
      })}
    </div>
  );
}
