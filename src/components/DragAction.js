import React, { useState } from "react";

const DragAction = () => {
  const [messages, setMessages] = useState(["Welcome to Action Testing!"]);
  const [message, setMessage] = useState("Click and hold");
  const [doubleClickMessage, setDoubleClickMessage] = useState("Double click here");
  const [shiftClickMessage, setShiftClickMessage] = useState("Shift + Mouse Hold");
  const [rightClickMessage, setRightClickMessage] = useState("Right-click here");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const addMessage = (newMessage) => {
    setMessages((prev) => [newMessage, ...prev]);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    const targetBox = e.target.closest(".drop-zone");

    if (targetBox && !targetBox.contains(draggableElement)) {
      targetBox.appendChild(draggableElement);
      addMessage("Element moved!");
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
    addMessage("Double-click success!");

    setTimeout(() => {
      setDoubleClickMessage("Double click here");
      setIsGreen(false);
    }, 5000);
  };

  const handleShiftClick = (e) => {
    if (e.shiftKey) {
      setShiftClickMessage("Good job!");
      setIsRed(false);
      addMessage("Shift + Click success!");
    } else {
      setShiftClickMessage("Try again with Shift key!");
      setIsRed(true);
      addMessage("Shift key was not held!");
    }
    setTimeout(() => {
      setShiftClickMessage("Shift + Mouse Hold");
      setIsRed(false);
    }, 5000);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setRightClickMessage("Right-click detected!");
    addMessage("Right-click action performed!");

    setTimeout(() => {
      setRightClickMessage("Right-click here");
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-6 min-h-screen overflow-auto">
      {/* Message Section */}
      <div className="bg-gray-300 p-4 w-full max-w-3xl rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Messages</h2>
        <div className="mt-2 h-24 overflow-y-auto bg-white p-2 rounded border border-gray-400 text-sm">
          {messages.map((msg, index) => (
            <p key={index} className="text-gray-800">
              {msg}
            </p>
          ))}
        </div>
      </div>

      {/* Top Two Boxes */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Drag & Drop Test */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Drag & Drop Test</h3>
          <p className="text-sm text-gray-600">Drag the elements between the boxes:</p>

          <div className="flex justify-between mt-4">
            {/* Drop Zone 1 */}
            <div
              className="drop-zone w-1/2 h-24 border-2 border-gray-500 flex items-center justify-center"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}>
              <p
                id="dragElement1"
                draggable
                onDragStart={handleDragStart}
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded user-select-none">
                Drag (A)
              </p>
            </div>

            {/* Drop Zone 2 */}
            <div
              className="drop-zone w-1/2 h-24 border-2 border-gray-500 flex items-center justify-center"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}>
              <p
                id="dragElement2"
                draggable
                onDragStart={handleDragStart}
                className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded user-select-none">
                Drag (B)
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

      {/* Right Click Test */}
      <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-4xl">
        <h3 className="text-lg font-semibold">Right Click Test</h3>
        <p className="text-sm text-gray-600">Right-click the box below:</p>
        <div
          className="mt-4 w-full h-16 flex items-center justify-center rounded text-white text-lg cursor-pointer bg-gray-500 transition-colors"
          onContextMenu={handleRightClick}>
          {rightClickMessage}
        </div>
      </div>
    </div>
  );
};

export default DragAction;
