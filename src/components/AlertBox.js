import React from "react";

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
