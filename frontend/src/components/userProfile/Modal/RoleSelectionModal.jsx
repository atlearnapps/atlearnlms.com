import React from "react";
import TeacherIcon from "src/assets/images/User/Teacher.jpg"
import StudentIcon from "src/assets/images/User/Student.jpg"
export default function RoleSelectionModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const handleRedirect = (url) => {
    onClose(); // close modal first
    window.location.href = url; // navigate in same tab
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-center text-lg font-semibold mb-6">
          Please choose your account
        </h2>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Doctor */}
          <div className="cursor-pointer flex flex-col items-center bg-gray-50 hover:bg-gray-100 rounded-xl p-4 border border-gray-200 shadow-sm">
            <img
              src={TeacherIcon}
              alt="Doctor"
              className="w-24 h-24 mb-3"
            />
            <button onClick={()=>handleRedirect("http://www.atlearn.in/register?to=/room?role=Moderator")} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
              Sign Up as Teacher
            </button>
          </div>

          {/* Patient */}
          <div className="cursor-pointer flex flex-col items-center bg-gray-50 hover:bg-gray-100 rounded-xl p-4 border border-gray-200 shadow-sm">
            <img
              src={StudentIcon}
              alt="Patient"
              className="w-24 h-24 mb-3"
            />
            <button onClick={()=>handleRedirect("http://www.atlearn.in/register?to=/room?role=Guest")}  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
              Sign Up as Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
