import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import UserNavbar from "./UserNavbar"; // Import UserNavbar component

const UserHome = ({ onLogout }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-24 flex flex-col items-center">
      {/* Use UserNavbar and remove the old Navbar */}
      <UserNavbar onLogout={onLogout} />

      <h1 className="text-gray-800 text-3xl font-bold mb-4">Welcome, User!</h1>
      <h2 className="text-gray-700 text-2xl font-semibold mb-3">
        Your Certificates
      </h2>

      <div className="w-full max-w-4xl">
        <table className="w-full bg-white rounded-lg shadow-md border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left text-gray-700">Event</th>
              <th className="p-3 text-left text-gray-700">Certificate</th>
              <th className="p-3 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="p-3 text-gray-600"></td>
              <td className="p-3 text-gray-600"></td>
              <td className="p-3 text-gray-600"></td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="p-3 text-gray-600"></td>
              <td className="p-3 text-gray-600"></td>
              <td className="p-3 text-gray-600"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHome;
