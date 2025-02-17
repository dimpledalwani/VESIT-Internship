import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-[#f5f1e6] flex flex-col">
      <Navbar onLogout={handleLogout} />

      {/* Hero Section */}
      <section className="flex-grow max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="bg-[#fdf8e8] rounded-2xl shadow-lg p-8 border border-[#e0c9a9]">
          <h1 className="text-4xl font-light text-[#5f4b32] mb-6">
            Create Professional Certificates Effortlessly
          </h1>
          <p className="text-[#7d6954] text-lg max-w-2xl mx-auto mb-8">
            Transform your recognition process with our seamless e-certification
            platform for education, awards, and special occasions.
          </p>
          <img
            src="/welcome-image.png"
            alt="Welcome"
            className="w-full h-64 object-contain rounded-lg border border-[#e0c9a9]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex-grow">
        <div className="bg-[#fdf8e8] rounded-2xl shadow-lg p-8 border border-[#e0c9a9] flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-light text-[#5f4b32] mb-4">
              Instant Digital Delivery
            </h2>
            <p className="text-[#7d6954]">
              Securely issue and distribute verifiable certificates with
              real-time tracking and immediate access for recipients.
            </p>
          </div>
          <img
            src="/receive-image.png"
            alt="Receive Certificate"
            className="flex-1 w-full max-w-md rounded-lg border border-[#e0c9a9]"
          />
        </div>
      </section>

      {/* Templates Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex-grow">
        <div className="bg-[#fdf8e8] rounded-2xl shadow-lg p-8 border border-[#e0c9a9]">
          <h2 className="text-3xl font-light text-[#5f4b32] text-center mb-8">
            Template Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="group relative">
                <img
                  src={`/template${num}.png`}
                  alt={`Template ${num}`}
                  className="w-full h-48 object-contain rounded-lg border-2 border-[#e0c9a9] group-hover:border-[#b89b74] transition-colors"
                />
                <div className="absolute inset-0 bg-[#5f4b32] bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
