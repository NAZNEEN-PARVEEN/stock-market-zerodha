import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // flash message
  const [error, setError] = useState(false);  // error flag

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);

 const RENDER_API_URL = "https://stock-market-zerodha.onrender.com";
    try {
      const res = await fetch(`${RENDER_API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setError(false);
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.message || "Signup failed");
        setError(true);
      }
    } catch (err) {
      setMessage("Error connecting to server");
      setError(true);
    }
  };

  return (
    <>
      <style>
        {`
        /* Page container (2 column layout) */
        .signup-container {
          display: flex;
          height: 100vh;
          width: 100%;
        }

        /* Left side (image) */
        .signup-left {
          width: 40%;
          height: 70%;
          border-radius: 10px;
          overflow: hidden; 
          margin-left:50px;
          margin-top:50px;
        }
        .signup-left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Right side (form) */
        .signup-right {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
        }

        /* Form box */
        .form-box {
          width: 80%;
          max-width: 400px;
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Heading */
        .form-box h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #6a0dad;
        }

        /* Input fields */
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

        /* Button */
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

        /* Login text */
        .login-text {
          margin-top: 15px;
          text-align: center;
          font-size: 14px;
          color: #555;
        }
        .login-text a {
          color: #6a0dad;
          font-weight: bold;
          text-decoration: none;
        }
        .login-text a:hover {
          text-decoration: underline;
        }

        /* Flash message */
        .flash-message {
          text-align: center;
          margin-top: 10px;
          font-weight: bold;
        }
        `}
      </style>

      <div className="signup-container">
        {/* Left Side - Image */}
        <div className="signup-left">
          <img
            src="https://zerodha.com/static/images/ecosystem.png"
            alt="Signup Illustration"
          />
        </div>

        {/* Right Side - Form */}
        <div className="signup-right">
          <div className="form-box">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
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

              {/* Password */}
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

              {/* Button */}
              <button type="submit">Sign Up</button>
            </form>

            {/* Flash message */}
            {message && (
              <p
                className="flash-message"
                style={{ color: error ? "red" : "green" }}
              >
                {message}
              </p>
            )}

            <p className="login-text">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
