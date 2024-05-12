import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ProgressBar } from "react-loader-spinner";

const LoaderJs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const [showNewParagraph, setShowNewParagraph] = useState(false);

  useEffect(() => {
    // Simulate loading for 5 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(interval); // Clear the interval when countdown reaches 1
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    // Clean up both the timeout and interval to avoid memory leaks
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []); // Runs once on component mount

  useEffect(() => {
    // Show the new paragraph after 8 seconds
    const newParagraphTimeout = setTimeout(() => {
      setShowNewParagraph(true);
    }, 8000);

    return () => clearTimeout(newParagraphTimeout); // Clean up the timeout
  }, []); // Runs once on component mount

  const handleSubmit = () => {
    toast.success("Button clicked!");
  };

  return (
    <div>
      <div className="headerStyle">
        <h2>Loader Two</h2>
        <p>Use this webpage to test a paragraph that appears after 8 seconds. This element is created as a new P element in the DOM.</p>
        <p>This is an existing paragraph.</p>
        {showNewParagraph && <p>This is a new paragraph that appears after 8 seconds.</p>}
        <div>
          {isLoading ? (
            <div className="loader">
              <ProgressBar
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
              <p>Countdown: {countdown}</p>
            </div>
          ) : (
            <div>
              <button onClick={handleSubmit}>Click Me</button>
            </div>
          )}
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default LoaderJs;
