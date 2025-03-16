import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const MouseMove = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  let hoverTimeout;

  const toggleResponsive = () => {
    setIsResponsive((prevState) => !prevState);
  };

  const handleClick = (link) => {
    toast.success(`You clicked on ${link}`);
  };

  // Show dropdown on hover
  const handleMouseEnter = (menu) => {
    clearTimeout(hoverTimeout);
    setHoveredDropdown(menu);
  };

  // Delay hiding dropdown on mouse leave
  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredDropdown(null);
    }, 300); // 300ms delay before hiding
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800">Mouse Movement Test</h1>
      <p className="text-gray-600 mt-2">Test your mouse movement with this interactive navbar.</p>

      {/* Navbar */}
      <nav className="w-full max-w-4xl mt-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-wrap items-center justify-between px-6 py-4">
          <a href="#home" onClick={() => handleClick("Home Section")} className="text-blue-600 font-semibold hover:text-blue-800">
            Home
          </a>

          {/* Dropdown - News */}
          <div className="relative" onMouseEnter={() => handleMouseEnter("news")} onMouseLeave={handleMouseLeave}>
            <button className="text-gray-700 font-semibold hover:text-blue-600 focus:outline-none">News</button>
            {hoveredDropdown === "news" && (
              <div className="absolute left-0 mt-2 bg-white border shadow-md rounded-md w-40">
                <a href="#Link1" onClick={() => handleClick("Politics News")} className="block px-4 py-2 hover:bg-gray-100">
                  Politics
                </a>
                <a href="#Link2" onClick={() => handleClick("Technology News")} className="block px-4 py-2 hover:bg-gray-100">
                  Technology
                </a>
                <a href="#Link3" onClick={() => handleClick("Finance News")} className="block px-4 py-2 hover:bg-gray-100">
                  Finance
                </a>
              </div>
            )}
          </div>

          <a href="#contact" onClick={() => handleClick("Contact Section")} className="text-gray-700 font-semibold hover:text-blue-600">
            Contact
          </a>

          {/* Dropdown - Generic */}
          <div className="relative" onMouseEnter={() => handleMouseEnter("dropdown")} onMouseLeave={handleMouseLeave}>
            <button className="text-gray-700 font-semibold hover:text-blue-600 focus:outline-none">Dropdown</button>
            {hoveredDropdown === "dropdown" && (
              <div className="absolute left-0 mt-2 bg-white border shadow-md rounded-md w-40">
                <a href="#Link1" onClick={() => handleClick("Link 1")} className="block px-4 py-2 hover:bg-gray-100">
                  Link 1
                </a>
                <a href="#Link2" onClick={() => handleClick("Link 2")} className="block px-4 py-2 hover:bg-gray-100">
                  Link 2
                </a>
                <a href="#Link3" onClick={() => handleClick("Link 3")} className="block px-4 py-2 hover:bg-gray-100">
                  Link 3
                </a>
              </div>
            )}
          </div>

          <a href="#about" className="text-gray-700 font-semibold hover:text-blue-600">
            About
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-700 text-2xl focus:outline-none" onClick={toggleResponsive}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isResponsive && (
          <div className="flex flex-col bg-gray-50 md:hidden border-t">
            <a href="#home" onClick={() => handleClick("Home Section")} className="px-6 py-2 hover:bg-gray-200">
              Home
            </a>
            <a href="#contact" onClick={() => handleClick("Contact Section")} className="px-6 py-2 hover:bg-gray-200">
              Contact
            </a>
            <a href="#about" className="px-6 py-2 hover:bg-gray-200">
              About
            </a>
          </div>
        )}
      </nav>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MouseMove;
