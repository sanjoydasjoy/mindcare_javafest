import { Link } from "react-router-dom";
import '../../Allcss/HeaderPages/Auth.css'; // Assuming a shared CSS for both login and signup

export default function Login() {
  return (
    <div className="auth-container">
      <h2 className="auth-header">Login to Your Account</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      <div className="auth-footer">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}
