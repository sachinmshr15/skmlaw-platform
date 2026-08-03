import { knowledge } from "@/content/knowledge";
import KnowledgeCard from "./KnowledgeCard";

export default function KnowledgeGrid() {
  return (
    <div
      className="
        mt-20
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
        items-stretch
      "
    >
      {knowledge.map((article) => (
        <KnowledgeCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
}