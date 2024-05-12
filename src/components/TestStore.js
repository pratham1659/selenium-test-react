import React from "react";
import { Toaster, toast } from "react-hot-toast";

const TestStore = () => {
  const handleSubmit = () => {
    toast.success("Button clicked!");
  };
  return (
    <div className="headerStyle">
      <h2>Test Store</h2>
      <p>Test Store will Coming Soon </p>
      <button onClick={handleSubmit}>Click</button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default TestStore;
