import { useState } from "react";
import "./SnippetCard.css";

const langColors = {
  JavaScript: { bg: "#7c3aed", text: "#ffffff" },
  Python: { bg: "#7c3aed", text: "#ffffff" },
  CSS: { bg: "#2563eb", text: "#ffffff" },
  TypeScript: { bg: "#2563eb", text: "#ffffff" },
  React: { bg: "#0891b2", text: "#ffffff" },
  SQL: { bg: "#7c3aed", text: "#ffffff" },
  HTML: { bg: "#dc2626", text: "#ffffff" },
};

const getLineColor = (line) => {
  const trimmed = line.trim();
  if (trimmed.startsWith("//") || trimmed.startsWith("#")) return "#9ca3af";
  if (trimmed.match(/^(import|export|const|let|var|function|return|if|else|for|while|class|async|await|def|print)/)) return "#7c3aed";
  if (trimmed.match(/['"``]/)) return "#059669";
  if (trimmed.match(/[{}()[\]]/)) return "#374151";
  return "#374151";
};

const SnippetCard = ({ snippet, onDelete, onEdit }) => {
  const [copied, setCopied] = useState(false);
  const lang = langColors[snippet.language] || { bg: "#7c3aed", text: "#ffffff" };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="snippet-card">
      <div className="card-header">
        <span className="card-title">{snippet.title}</span>
        <div className="card-actions">
          <button className="icon-btn" onClick={handleCopy} title="Copy">
            {copied ? "✓" : "📃"}
          </button>
          <button className="icon-btn" onClick={() => onEdit(snippet)} title="Edit">
            📝
          </button>
          <button className="icon-btn delete" onClick={() => onDelete(snippet.id)} title="Delete">
            🗑️
          </button>
        </div>
      </div>

      <div className="card-meta">
        <span
          className="lang-badge"
          style={{ background: lang.bg, color: lang.text }}
        >
          {snippet.language}
        </span>
        {snippet.tags?.map((tag) => (
          <span key={tag} className="card-tag">
            🏷️ {tag}
          </span>
        ))}
      </div>

      <div className="card-code">
        {snippet.code.split("\n").map((line, i) => (
          <div key={i} style={{ color: getLineColor(line) }}>
            {line || "\u00A0"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnippetCard;