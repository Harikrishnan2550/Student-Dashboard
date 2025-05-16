import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-5 md:mb-0 ml-11 md:ml-0">
            Student Exam Performance <span className="ml-24 md:ml-0">Dashboard</span> 
          </h1>
          <div className="flex items-center space-x-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              Live Data
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              Updated Today
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;