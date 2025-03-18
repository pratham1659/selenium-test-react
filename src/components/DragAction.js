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

  const initialItems = [
    { id: "apple", name: "Apple", category: "fruit" },
    { id: "carrot", name: "Carrot", category: "vegetable" },
    { id: "banana", name: "Banana", category: "fruit" },
    { id: "broccoli", name: "Broccoli", category: "vegetable" },
  ];

  const [availableItems, setAvailableItems] = useState(initialItems);
  const [droppedFruits, setDroppedFruits] = useState([]);
  const [droppedVegetables, setDroppedVegetables] = useState([]);
  const [draggingId, setDraggingId] = useState(null);

  // Message states and other action test states remain same

  const addMessage = (msg) => {
    setMessages((prev) => [msg, ...prev]);
  };

  const handleDragStart = (e, id) => {
    setDraggingId(id);
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e, targetCategory) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggedItem = initialItems.find((item) => item.id === id);

    if (draggedItem) {
      if (draggedItem.category === targetCategory) {
        addMessage(`✅ Correct! ${draggedItem.name} belongs in ${targetCategory}.`);
        // Update available items and dropped items
        setAvailableItems((prev) => prev.filter((item) => item.id !== id));
        if (targetCategory === "fruit") {
          setDroppedFruits((prev) => [...prev, draggedItem]);
        } else {
          setDroppedVegetables((prev) => [...prev, draggedItem]);
        }
      } else {
        addMessage(`❌ Incorrect! ${draggedItem.name} does not belong in ${targetCategory}.`);
      }
    }
    setDraggingId(null);
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
    <div id="drag-action-container" className="flex flex-col items-center gap-8 p-6 min-h-screen overflow-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Action Testing Playground</h2>

      {/* Message Section */}
      <section id="messages-section" className="bg-gray-300 p-4 w-full max-w-3xl rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Messages</h2>
        <div className="mt-2 h-24 overflow-y-auto bg-white p-2 rounded border border-gray-400 text-sm">
          {messages.map((msg, index) => (
            <p key={index} className="text-gray-800">
              {msg}
            </p>
          ))}
        </div>
      </section>

      {/* Drag & Drop Section */}
      <section className="w-full max-w-4xl space-y-6">
        <h2 className="text-xl font-bold text-center">Drag & Drop Fruits and Vegetables</h2>

        {/* Draggable Items */}
        <div className="flex flex-wrap gap-3 justify-center">
          {availableItems.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              className={`
                px-4 py-2 rounded-lg cursor-grab active:cursor-grabbing
                ${draggingId === item.id ? "opacity-50 scale-95" : "opacity-100"}
                transition-all duration-200
                ${item.category === "fruit" ? "bg-green-200 hover:bg-green-300" : "bg-orange-200 hover:bg-orange-300"}
              `}>
              {item.name}
            </div>
          ))}
        </div>

        {/* Drop Zones */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Fruit Drop Zone */}
          <div
            onDrop={(e) => handleDrop(e, "fruit")}
            onDragOver={(e) => e.preventDefault()}
            className={`
              min-w-[300px] min-h-[150px] p-4 rounded-xl border-4 border-dashed
              ${droppedFruits.length ? "border-green-500 bg-green-50" : "border-green-200"}
              transition-colors duration-200
            `}>
            <p className="text-green-600 font-semibold mb-2">Fruits</p>
            <div className="flex flex-wrap gap-2">
              {droppedFruits.map((item) => (
                <div key={item.id} className="px-3 py-1 bg-green-100 rounded-full">
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Vegetable Drop Zone */}
          <div
            onDrop={(e) => handleDrop(e, "vegetable")}
            onDragOver={(e) => e.preventDefault()}
            className={`
              min-w-[300px] min-h-[150px] p-4 rounded-xl border-4 border-dashed
              ${droppedVegetables.length ? "border-orange-500 bg-orange-50" : "border-orange-200"}
              transition-colors duration-200
            `}>
            <p className="text-orange-600 font-semibold mb-2">Vegetables</p>
            <div className="flex flex-wrap gap-2">
              {droppedVegetables.map((item) => (
                <div key={item.id} className="px-3 py-1 bg-orange-100 rounded-full">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Tests */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Right Click Test */}
        <section id="right-click-test" className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Right Click Test</h3>
          <p className="text-sm text-gray-600">Right-click the box below:</p>
          <div
            className="mt-4 w-full h-16 flex items-center justify-center rounded text-white text-lg cursor-pointer bg-gray-500 transition-colors"
            onContextMenu={handleRightClick}>
            {rightClickMessage}
          </div>
        </section>

        {/* Double Click Test */}
        <section id="double-click-test" className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Double Click Test</h3>
          <p className="text-sm text-gray-600">Double-click the box:</p>
          <div
            className={`mt-4 w-full h-16 flex items-center justify-center rounded text-white text-lg cursor-pointer transition-colors ${
              isGreen ? "bg-green-500" : "bg-gray-500"
            }`}
            onDoubleClick={handleDoubleClick}>
            {doubleClickMessage}
          </div>
        </section>

        {/* Mouse Hold Test */}
        <section id="mouse-hold-test" className="bg-gray-200 p-4 rounded-lg shadow-md">
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
        </section>

        {/* Shift + Mouse Hold Test */}
        <section id="shift-mouse-test" className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Shift + Mouse Hold Test</h3>
          <p className="text-sm text-gray-600">Click the box while holding Shift:</p>
          <div
            className={`mt-4 w-full h-16 flex items-center justify-center rounded text-white text-lg cursor-pointer transition-colors ${
              isRed ? "bg-red-500" : "bg-green-500"
            }`}
            onMouseDown={handleShiftClick}>
            {shiftClickMessage}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DragAction;
