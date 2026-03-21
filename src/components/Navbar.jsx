import useAuth from "../hooks/useAuth";
import "./Navbar.css";

const Navbar = ({ onAddSnippet }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
        <div className="auth-logo">
       <div className="auth-logo-image">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
       </div>
          <h1 className="auth-logo-text">CodeStash</h1>
        </div>
      <div className="navbar-right">
        <button className="add-btn" onClick={onAddSnippet}>
          + Add Snippet
        </button>
        <div className="user-menu">
          <div className="user-avatar">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="avatar" />
            ) : (
              <span>{user?.email?.[0].toUpperCase()}</span>
            )}
          </div>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;