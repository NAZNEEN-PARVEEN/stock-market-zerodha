import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://stock-market-zerodha.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setError(false);
        setEmail("");
        setPassword("");
        // optional: store token
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

// ******************************************************
 
 window.location.href = 'https://dashboard-zd.netlify.app/dashboard';  // ******************************************************

        // redirect to dashboard or homepage
        // navigate("/dashboard");
      } else {
        setMessage(data.message || "Login failed");
        setError(true);
      }
    } catch (err) {
      setMessage("Something went wrong");
      setError(true);
    }
  };

  return (
    <>
      <style>
        {`
        .login-container {
          display: flex;
          height: 100vh;
          width: 100%;
        }

        .login-left {
          width: 40%;
          height: 70%;
          border-radius: 10px;
          overflow: hidden;
          margin-left: 50px;
          margin-top: 50px;
        }
        .login-left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .login-right {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
        }

        .form-box {
          width: 80%;
          max-width: 400px;
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }

        .form-box h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #6a0dad;
        }

        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 5px;
          color: #6a0dad;
        }
        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #d1b3ff;
          border-radius: 8px;
          outline: none;
          transition: 0.3s;
        }
        .form-group input:focus {
          border-color: #6a0dad;
          box-shadow: 0px 0px 5px rgba(106, 13, 173, 0.4);
        }

        button {
          width: 100%;
          padding: 12px;
          background: #6a0dad;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #580b9e;
        }

        .signup-text {
          margin-top: 15px;
          text-align: center;
          font-size: 14px;
          color: #555;
        }
        .signup-text a {
          color: #6a0dad;
          font-weight: bold;
          text-decoration: none;
        }
        .signup-text a:hover {
          text-decoration: underline;
        }

        /* flash message */
        .flash-message {
          text-align: center;
          margin-bottom: 15px;
          font-weight: bold;
        }
        .flash-success { color: green; }
        .flash-error { color: red; }
        `}
      </style>

      <div className="login-container">
        <div className="login-left">
          <img
            src="https://zerodha.com/static/images/ecosystem.png"
            alt="Login Illustration"
          />
        </div>

        <div className="login-right">
          <div className="form-box">
            <h2>Login</h2>

            {message && (
              <p className={`flash-message ${error ? "flash-error" : "flash-success"}`}>
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit">Login</button>
            </form>

            <p className="signup-text">
              Dont have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
