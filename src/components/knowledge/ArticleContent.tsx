import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ArticleContentProps = {
  content: string;
};

export default function ArticleContent({
  content,
}: ArticleContentProps) {
  return (
    <article
      className="
        skm-prose
        mx-auto
        mt-16
        max-w-4xl
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}