import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">Welcome to HomePage</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Testing Arena</h2>
      <h3 className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
        This website has been designed to help you practice your test automation skills by providing various scenarios that you will find
        across the web.
      </h3>
      <p className="text-gray-500 text-sm text-center mt-3">Use the menu on the left to navigate across the website.</p>
    </div>
  );
};

export default Home;
