import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportIssue = () => {
  const [issueDescription, setIssueDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Issue reported: ${issueDescription}`);
    navigate("/user-home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Report an Issue</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="issueDescription" className="block text-gray-700 font-medium mb-2">
            Describe the issue:
          </label>
          <textarea
            id="issueDescription"
            rows="5"
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
            placeholder="Describe the issue with the certificate"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
