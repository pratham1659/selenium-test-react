import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const DragAction = () => {
  const [message, setMessage] = useState("Click and hold");
  const [doubleClickMessage, setDoubleClickMessage] = useState("Double click here");
  const [shiftClickMessage, setShiftClickMessage] = useState("Shift + Mouse Hold");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    const targetBox = e.target.closest(".box");
    const sourceBox = draggableElement.closest(".box");

    if (targetBox && sourceBox !== targetBox) {
      targetBox.appendChild(draggableElement);
      toast.success("Element moved!");
    }
  };

  const handleMouseDown = () => {
    setMessage("Keep holding down");
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setMessage("No, don't let go :(");
    setIsMouseDown(false);
  };

  const handleDoubleClick = () => {
    setDoubleClickMessage("Well done!");
    setIsGreen(true);
    setTimeout(() => {
      setDoubleClickMessage("Double click here");
      setIsGreen(false);
    }, 5000);
  };

  const handleShiftClick = (e) => {
    if (e.shiftKey) {
      setShiftClickMessage("Good job!");
      setIsRed(false);
    } else {
      setShiftClickMessage("Try again with Shift key!");
      setIsRed(true);
    }
    setTimeout(() => {
      setShiftClickMessage("Shift + Mouse Hold");
      setIsRed(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <h2 className="text-2xl font-bold">Action Testing</h2>

      {/* Top Two Boxes */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Drag & Drop Test */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Drag & Drop Test</h3>
          <p className="text-sm text-gray-600">Drag the elements between the boxes:</p>
          <div className="flex justify-between mt-4">
            <div
              className="w-1/2 h-24 border-2 border-gray-500 flex items-center justify-center"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}>
              <p
                id="dragElement1"
                draggable
                onDragStart={handleDragStart}
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
                Drag me (A)
              </p>
            </div>
            <div
              className="w-1/2 h-24 border-2 border-gray-500 flex items-center justify-center"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}>
              <p
                id="dragElement2"
                draggable
                onDragStart={handleDragStart}
                className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded">
                Drag me (B)
              </p>
            </div>
          </div>
        </div>

        {/* Mouse Hold Test */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Mouse Hold Test</h3>
          <p className="text-sm text-gray-600">Hold down the box:</p>
          <div
            className={`mt-4 w-full h-16 flex items-center justify-center rounded text-white text-lg cursor-pointer transition-colors ${
              isMouseDown ? "bg-green-500" : "bg-red-500"
            }`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}>
            {message}
          </div>
        </div>
      </div>

      {/* Bottom Two Boxes */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Double Click Test */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Double Click Test</h3>
          <p className="text-sm text-gray-600">Double-click the box:</p>
          <div
            className={`mt-4 w-full h-16 flex items-center justify-center rounded text-white text-lg cursor-pointer transition-colors ${
              isGreen ? "bg-green-500" : "bg-gray-500"
            }`}
            onDoubleClick={handleDoubleClick}>
            {doubleClickMessage}
          </div>
        </div>

        {/* Shift + Mouse Hold Test */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Shift + Mouse Hold Test</h3>
          <p className="text-sm text-gray-600">Click the box while holding Shift:</p>
          <div
            className={`mt-4 w-full h-16 flex items-center justify-center rounded text-white text-lg cursor-pointer transition-colors ${
              isRed ? "bg-red-500" : "bg-green-500"
            }`}
            onMouseDown={handleShiftClick}>
            {shiftClickMessage}
          </div>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default DragAction;
