import { useState, useEffect } from "react";
import "./SnippetModal.css";

const languages = ["JavaScript", "Python", "CSS", "TypeScript", "React", "SQL", "HTML"];

const SnippetModal = ({ onClose, onSave, editSnippet }) => {
  const [form, setForm] = useState({
    title: "",
    language: "JavaScript",
    tags: "",
    code: "",
  });

  useEffect(() => {
    if (editSnippet) {
      setForm({
        title: editSnippet.title,
        language: editSnippet.language,
        tags: editSnippet.tags?.join(", "),
        code: editSnippet.code,
      });
    }
  }, [editSnippet]);

  const handleSave = () => {
    if (!form.title || !form.code) return;
    onSave({
      title: form.title,
      language: form.language,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      code: form.code,
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">
            {editSnippet ? "Edit Snippet" : "Add New Snippet"}
          </h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className="form-input"
            placeholder="Enter snippet title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Language</label>
          <select
            className="form-input"
            value={form.language}
            onChange={(e) => setForm({ ...form, language: e.target.value })}
          >
            {languages.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Tags (comma separated)</label>
          <input
            className="form-input"
            placeholder="e.g., react, hooks, utility"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Code</label>
          <textarea
            className="form-textarea"
            placeholder="Paste your code here..."
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
          />
        </div>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn" onClick={handleSave}>
            {editSnippet ? "Update Snippet" : "Save Snippet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SnippetModal;