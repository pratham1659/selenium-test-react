import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css"; // Import CSS for styling

const DragAction = () => {
  const [message, setMessage] = useState("");
  const [doubleClickMessage, setdoubleClickMessage] = useState("");
  const [shiftClickMessage, setshiftClickMessage] = useState("");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    setMessage("Click and hold");
    setshiftClickMessage("Shift + Mouse Hold");
    setdoubleClickMessage("Double click here");
  }, []); // Run this effect only once when the component mounts

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDoubleClick = () => {
    setdoubleClickMessage("Well done");
    setIsGreen(true);

    // Reset the message and color after 1 second
    setTimeout(() => {
      setdoubleClickMessage("Double click here");
      setIsGreen(false);
    }, 2000);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    const targetBox = e.target.closest(".box");
    const sourceBox = draggableElement.closest(".box");
    targetBox.appendChild(draggableElement);

    if (sourceBox !== targetBox) {
      toast.success("Element dragged from one box to another");
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

  const handleClickDown = (e) => {
    if (e.shiftKey) {
      setshiftClickMessage("Well done");
    } else {
      setshiftClickMessage("Try again");
      setIsRed(true);
    }

    // Reset the message and color after 2 seconds
    setTimeout(() => {
      setshiftClickMessage("Shift + Mouse Hold");
      setIsRed(false);
    }, 2000);
  };

  const handleClickUp = () => {
    setshiftClickMessage("");
    setIsRed(false);
  };

  return (
    <div className="actionsContainer">
      <div className="actionContent headerStyle">
        <h1>Action Testing</h1>
        <div className="popupButtonsContainer">
          <div className="actionButtonGroup">
            <h2>Drag & Drop Test</h2>
            <p>Drag the p element back and forth between the two rectangles:</p>
            <div className="container">
              <div className="box" onDragOver={handleDragOver} onDrop={handleDrop}>
                <p id="dragElement1" draggable onDragStart={handleDragStart}>
                  Drag me(A)
                </p>
              </div>
              <div className="box" onDragOver={handleDragOver} onDrop={handleDrop}>
                <p id="dragElement2" draggable onDragStart={handleDragStart}>
                  Drag me(B)
                </p>
              </div>
            </div>
          </div>
          <div className="actionButtonGroup">
            <h2>Mouse Hold Test</h2>
            <p>Hold this area down with your mouse:</p>
            <div className="container">
              <div className={`hold-box ${isMouseDown ? "green-bg" : "red-bg"}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                {message}
              </div>
            </div>
          </div>
        </div>
        <div className="popupButtonsContainer">
          <div className="actionButtonGroup">
            <h2>Mouse Double Click Test</h2>
            <p>Double-click this area below to trigger a function:</p>
            <div className={`double-click-box ${isGreen ? "green-bg" : ""}`} onDoubleClick={handleDoubleClick}>
              {doubleClickMessage}
            </div>
          </div>
          <div className="actionButtonGroup">
            <h2>Shift + Mouse Hold Test</h2>
            <p>Click the button below while holding the shift key:</p>
            <div className={`hold-shift-click-box ${isRed ? "red-bg" : ""}`} onMouseDown={handleClickDown} onMouseUp={handleClickUp}>
              {shiftClickMessage}
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default DragAction;
