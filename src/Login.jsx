import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();

    const routes = {
      user: "/user-home",
      issuer: "/issuer-home",
      admin: "/admin-home",
    };
    navigate(routes[role]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-[#edf2f7] w-full max-w-md">
        <h1 className="text-3xl font-light text-[#1e293b] text-center mb-8">
          Account Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm text-[#64748b]">Full Name</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border border-[#edf2f7] 
                         focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8]
                         outline-none pl-10"
                placeholder="John Doe"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-3.5 text-[#94a3b8]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-[#64748b]">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-[#edf2f7] 
                         focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8]
                         outline-none pl-10"
                placeholder="john@example.com"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-3.5 text-[#94a3b8]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-[#64748b]">Account Type</label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 rounded-lg border border-[#edf2f7] 
                         focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8]
                         outline-none appearance-none bg-white"
              >
                <option value="user">Certificate Recipient</option>
                <option value="issuer">Institution Issuer</option>
                <option value="admin">System Administrator</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-3.5 text-[#94a3b8]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#334155] text-white py-3 px-6 rounded-lg 
                     font-normal hover:bg-[#475569] transition-colors"
          >
            Continue to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
