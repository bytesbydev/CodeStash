import { useState } from "react";
import "./SnippetCard.css";

const langColors = {
  JavaScript: { bg: "#fefce8", text: "#854d0e", border: "#fde68a" },
  React: { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
  CSS: { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
  Python: { bg: "#faf5ff", text: "#7e22ce", border: "#e9d5ff" },
  TypeScript: { bg: "#eff6ff", text: "#1e40af", border: "#bfdbfe" },
  SQL: { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa" },
};

const SnippetCard = ({ snippet, onDelete, onEdit }) => {
  const [copied, setCopied] = useState(false);
  const lang = langColors[snippet.language] || { bg: "#f3f4f6", text: "#374151", border: "#e5e7eb" };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="snippet-card">
      <div className="card-header">
        <span className="card-title">{snippet.title}</span>
        <div className="card-header-right">
          <span
            className="lang-badge"
            style={{ background: lang.bg, color: lang.text, borderColor: lang.border }}
          >
            {snippet.language}
          </span>
          <button className="icon-btn" onClick={() => onEdit(snippet)}>✏️</button>
          <button className="icon-btn" onClick={() => onDelete(snippet.id)}>🗑️</button>
        </div>
      </div>

      <div className="card-code">
        <pre>{snippet.code}</pre>
      </div>

      <div className="card-footer">
        <div className="card-tags">
          {snippet.tags?.map((tag) => (
            <span key={tag} className="card-tag">#{tag}</span>
          ))}
        </div>
        <button
          className={`copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default SnippetCard;