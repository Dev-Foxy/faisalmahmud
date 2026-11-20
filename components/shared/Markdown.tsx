import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

/** Renders Markdown from /content with the site's typography (.md-body in globals.css). */
export default function Markdown({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("md-body", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const external = href?.startsWith("http");
            return (
              <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                {children}
              </a>
            );
          },
          img: ({ src, alt }) => (
            <span className="block my-10 overflow-hidden rounded-2xl bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary sizes from Markdown */}
              <img src={typeof src === "string" ? src : ""} alt={alt ?? ""} loading="lazy" className="w-full h-auto" />
            </span>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
