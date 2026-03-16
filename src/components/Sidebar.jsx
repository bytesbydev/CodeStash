import "./Sidebar.css";

const languages = ["All", "JavaScript", "Python", "CSS", "TypeScript", "React", "SQL"];

const Sidebar = ({ snippets, selectedLang, setSelectedLang, selectedTag, setSelectedTag }) => {
  const allTags = [...new Set(snippets.flatMap((s) => s.tags))];

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <p className="sidebar-title">Languages</p>
        {languages.map((lang) => (
          <div
            key={lang}
            className={`sidebar-item ${selectedLang === lang ? "active" : ""}`}
            onClick={() => setSelectedLang(lang)}
          >
            <span>{lang}</span>
            <span className="sidebar-count">
              {lang === "All"
                ? snippets.length
                : snippets.filter((s) => s.language === lang).length}
            </span>
          </div>
        ))}
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-section">
        <p className="sidebar-title">Tags</p>
        <div className="tag-wrap">
          {allTags.map((tag) => (
            <span
              key={tag}
              className={`tag ${selectedTag === tag ? "active" : ""}`}
              onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;