import React from "react";
import { useParams } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const ComplaintView = ({ onLogout }) => {
  const { id } = useParams();
  const complaint = {
    id,
    description: "This is a detailed description of the reported issue...",
    status: "Under Review",
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <UserNavbar onLogout={onLogout} />

      <div className="max-w-4xl mx-auto p-8">
        <div className="space-y-8">
          <h1 className="text-3xl font-light text-[#1e293b]">
            Complaint #{id}
          </h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-[#edf2f7] space-y-6">
            <DetailItem label="Status">
              <StatusBadge status={complaint.status} />
            </DetailItem>

            <DetailItem label="Description">
              <p className="text-[#475569] leading-relaxed">
                {complaint.description}
              </p>
            </DetailItem>

            <button
              className="bg-[#334155] text-white px-6 py-2.5 rounded-lg
              hover:bg-[#475569] transition-colors flex items-center gap-2 w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, children }) => (
  <div>
    <label className="text-sm text-[#64748b] block mb-2">{label}</label>
    <div className="text-[#1e293b]">{children}</div>
  </div>
);

const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-sm
    ${
      status === "Resolved"
        ? "bg-green-100 text-green-700"
        : status === "Under Review"
        ? "bg-amber-100 text-amber-700"
        : "bg-blue-100 text-blue-700"
    }`}
  >
    {status}
  </span>
);

export default ComplaintView;
