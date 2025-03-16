import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ProgressBar } from "react-loader-spinner";

const LoaderJs = () => {
  const [isLoading1, setIsLoading1] = useState(true);
  const [countdown1, setCountdown1] = useState(5);

  const [isLoading2, setIsLoading2] = useState(true);
  const [countdown2, setCountdown2] = useState(5);
  const [showNewParagraph, setShowNewParagraph] = useState(false);

  // First Loader Effect (5 sec)
  useEffect(() => {
    const timeout1 = setTimeout(() => setIsLoading1(false), 5000);
    const interval1 = setInterval(() => {
      setCountdown1((prev) => (prev === 1 ? clearInterval(interval1) || 0 : prev - 1));
    }, 1000);

    return () => {
      clearTimeout(timeout1);
      clearInterval(interval1);
    };
  }, []);

  // Second Loader Effect (5 sec) + Paragraph Delay (8 sec)
  useEffect(() => {
    const timeout2 = setTimeout(() => setIsLoading2(false), 5000);
    const interval2 = setInterval(() => {
      setCountdown2((prev) => (prev === 1 ? clearInterval(interval2) || 0 : prev - 1));
    }, 1000);

    const newParagraphTimeout = setTimeout(() => setShowNewParagraph(true), 8000);

    return () => {
      clearTimeout(timeout2);
      clearInterval(interval2);
      clearTimeout(newParagraphTimeout);
    };
  }, []);

  const handleSubmit = () => toast.success("Button clicked!");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-10">
      {/* Loader 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-xl font-semibold text-blue-600">Loader One</h2>
        <p className="text-gray-700">Wait for the loader to finish in 5 seconds.</p>
        {isLoading1 ? (
          <div className="flex flex-col items-center mt-4">
            <ProgressBar visible height="80" width="100" color="#4fa94d" ariaLabel="progress-bar-loading" />
            <p className="text-gray-600 mt-2">Countdown: {countdown1}</p>
          </div>
        ) : (
          <button onClick={handleSubmit} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Click Me
          </button>
        )}
      </div>

      {/* Loader 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-xl font-semibold text-green-600">Loader Two</h2>
        <p className="text-gray-700">A paragraph appears after 8 seconds.</p>
        <p>This is an existing paragraph.</p>
        {showNewParagraph && <p className="text-green-600 mt-2">This is a new paragraph appearing after 8 seconds.</p>}
        {isLoading2 ? (
          <div className="flex flex-col items-center mt-4">
            <ProgressBar visible height="80" width="80" color="#4fa94d" ariaLabel="progress-bar-loading" />
            <p className="text-gray-600 mt-2">Countdown: {countdown2}</p>
          </div>
        ) : (
          <button onClick={handleSubmit} className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Click Me
          </button>
        )}
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default LoaderJs;
