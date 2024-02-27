import React, { useState } from "react";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const formatDate = (date) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    return date.toLocaleDateString("en-US", options);
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
              <input type="datetime-local" value={selectedDate.toISOString().slice(0, 16)} onChange={handleDateChange} />
              <p className="date-para">{formatDate(selectedDate)}</p>
            </div>
          </div>
          <div className="actionButtonGroup">
            <h2>Basic Date Select()</h2>
            <div>
              <label htmlFor="start" className="date-label">
                Start Date:
              </label>
              <input type="date" id="start" value={startDate} onChange={handleStartDateChange} />

              <label htmlFor="end" className="date-label">
                End Date:
              </label>
              <input type="date" id="end" value={endDate} onChange={handleEndDateChange} />
              <p className="date-para">
                Date range: {startDate} - {endDate}
              </p>
            </div>
          </div>
          <div className="actionButtonGroup">
            <h2>Select Time Picker</h2>
            <div>
              <input type="time" value={selectedTime} onChange={handleTimeChange} />
              <p className="date-para">Selected time: {selectedTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
