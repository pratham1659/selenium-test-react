import React from "react";
import "./styles.css";

const AlertBox = ({ message }) => {
  return (
    <>
      <div className="boxStyle">
        <div className="messageStyle">
          {message &&
            message.map((msg, index) => (
              <p key={index} className="paraStyle">
                {msg}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default AlertBox;
