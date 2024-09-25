import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from '../../UserContext'; // Import UserContext
import '../../Allcss/HeaderPages/Auth.css'; // Assuming a shared CSS for both login and signup

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext); // Access setUserInfo from context

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const userData = await response.json(); // Get user data from response
      setUserInfo(userData); // Store user data in context
      navigate("/dashboard");  // Redirect to a protected route
    } else {
      const errorMessage = await response.text(); // Get error message from response
      alert(errorMessage || "Login failed. Please check your credentials and try again."); // Alert with error message
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-header">Login to Your Account</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      <div className="auth-footer">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}
