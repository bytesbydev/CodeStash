import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const Signup = () => {
  const { signup, loginWithGoogle, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(email, password);
    navigate("/dashboard");
  };

  const handleGoogle = async () => {
    await loginWithGoogle();
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
          <div className="auth-logo">
       <div className="auth-logo-image">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
       </div>
          <h1 className="auth-logo-text">CodeStash</h1>
        </div>
        <h2 className="auth-title">Create an account</h2>
        <p className="auth-subtitle">Start organizing your code snippets today</p>

        {error && <div className="auth-error">{error}</div>}
<div className="auth-form">
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
                   placeholder="Enter your email....."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="auth-btn" type="submit">Create Account</button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <button className="google-btn" onClick={handleGoogle}>
          <img src="https://www.google.com/favicon.ico" alt="Google" width="18"/>
          Continue with Google
        </button>

        <p className="auth-switch">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Sign in</span>
        </p>
      </div>
        <p className="auth-accept">By signing in, you agree to our Terms of Service and Privacy Policy</p>
      </div>
      
    </div>
  );
};

export default Signup;