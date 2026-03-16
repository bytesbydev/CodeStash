import useAuth from "../hooks/useAuth";
import "./Navbar.css";

const Navbar = ({ onAddSnippet }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-logo-icon">📁</span>
        <span className="navbar-logo-text">CodeStash</span>
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