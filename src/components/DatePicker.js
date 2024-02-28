import React, { useState } from "react";

const DatePicker = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const formatDate = (dateTimeString) => {
    if (!dateTimeString) return ""; // handle empty string case
    const date = new Date(dateTimeString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="actionsContainer">
      <div className="actionContent headerStyle">
        <h1>Date Picker Testing</h1>
        <p>On this page you can run various tests against calendars using date pickers, date range and time selection.</p>
        <div className="popupButtonsContainer">
          <div className="actionButtonGroup">
            <h2>Basic Date Select()</h2>
            <div>
              <input className="datetime-para" type="datetime-local" value={selectedDateTime} onChange={handleDateTimeChange} />
              <p className="date-para">
                <strong>DateTime: </strong>
                {formatDate(selectedDateTime)}
              </p>
            </div>
          </div>
          <div className="actionButtonGroup">
            <h2>Basic Date Select()</h2>
            <div>
              <label htmlFor="start" className="date-label">
                <strong>Start Date:</strong>
              </label>
              <input type="date" id="start" value={startDate} onChange={handleStartDateChange} />

              <label htmlFor="end" className="date-label">
                <strong>End Date:</strong>
              </label>
              <input type="date" id="end" value={endDate} onChange={handleEndDateChange} />
              <p className="date-para">
                <strong>Range: </strong>
                {startDate} - {endDate}
              </p>
            </div>
          </div>
          <div className="actionButtonGroup">
            <h2>Select Time Picker</h2>
            <div>
              <input type="time" value={selectedTime} onChange={handleTimeChange} />
              <p className="date-para">
                <strong>Selected time: </strong>
                {selectedTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
