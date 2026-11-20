import React from "react";

/**
 * Renders copy from content/site.ts:
 *   *word*    → orange serif italic accent
 *   **word**  → highlighted (foreground colour, medium weight)
 */
export function Accent({ text, color = true }: { text: string; color?: boolean }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**"))
          return (
            <span key={i} className="text-foreground font-medium">
              {part.slice(2, -2)}
            </span>
          );
        if (part.startsWith("*"))
          return (
            <span
              key={i}
              className={`font-serif italic font-normal normal-case tracking-[-0.02em] ${color ? "text-brand" : ""}`}
            >
              {part.slice(1, -1)}
            </span>
          );
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}

/** Turns ["line one", "line *two*"] into React nodes for <MaskLines lines=…> */
export const accentLines = (lines: string[], color = true) =>
  lines.map((l, i) => <Accent key={i} text={l} color={color} />);
