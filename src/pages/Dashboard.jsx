import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SnippetCard from "../components/SnippetCard";
import SnippetModal from "../components/SnippetModal";
import useAuth from "../hooks/useAuth";
import useSnippets from "../hooks/useSnippets";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const { snippets, loading, addSnippet, deleteSnippet, updateSnippet } = useSnippets(user?.uid);
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editSnippet, setEditSnippet] = useState(null);

  const filtered = snippets.filter((s) => {
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    const matchLang = selectedLang === "All" || s.language === selectedLang;
    const matchTag = !selectedTag || s.tags?.includes(selectedTag);
    return matchSearch && matchLang && matchTag;
  });

  const handleSave = async (data) => {
    if (editSnippet) {
      await updateSnippet(editSnippet.id, data);
    } else {
      await addSnippet(data);
    }
    setEditSnippet(null);
  };

  const handleEdit = (snippet) => {
    setEditSnippet(snippet);
    setShowModal(true);
  };

  return (
    <div className="dashboard">
      <Navbar onAddSnippet={() => setShowModal(true)} />
      <div className="dashboard-layout">
        <Sidebar
          snippets={snippets}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <main className="dashboard-main">
          <div className="search-bar">
            <span>🔍</span>
            <input
              placeholder="Search snippets by title, code, or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <p className="snippets-count">{filtered.length} snippets found</p>
          {loading ? (
            <div className="loading">Loading snippets...</div>
          ) : filtered.length === 0 ? (
            <div className="empty-state">
              <p>📭</p>
              <p>No snippets found</p>
              <p>Add your first snippet!</p>
            </div>
          ) : (
            <div className="snippet-grid">
              {filtered.map((snippet) => (
                <SnippetCard
                  key={snippet.id}
                  snippet={snippet}
                  onDelete={deleteSnippet}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {showModal && (
        <SnippetModal
          onClose={() => { setShowModal(false); setEditSnippet(null); }}
          onSave={handleSave}
          editSnippet={editSnippet}
        />
      )}
    </div>
  );
};

export default Dashboard;