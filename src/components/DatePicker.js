import React, { useState } from "react";

const DatePicker = () => {
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const formatDate = (dateTimeString) => {
    if (!dateTimeString) return "";
    const date = new Date(dateTimeString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleString();
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Date Picker Testing</h1>
      <p className="text-center text-gray-600 mb-6">
        Run various tests against calendars using date pickers, date range, and time selection.
      </p>

      <div className="space-y-6">
        {/* DateTime Picker */}
        <div>
          <h2 className="text-lg font-semibold">Basic Date Select()</h2>
          <input
            className="w-full p-2 mt-2 border rounded-md"
            type="datetime-local"
            value={selectedDateTime}
            onChange={(e) => setSelectedDateTime(e.target.value)}
          />
          <p className="mt-2 text-gray-700">
            <strong>DateTime: </strong> {formatDate(selectedDateTime)}
          </p>
        </div>

        {/* Date Range Picker */}
        <div>
          <h2 className="text-lg font-semibold">Date Range Picker</h2>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <div>
              <label className="block font-medium">Start Date:</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium">End Date:</label>
              <input type="date" className="w-full p-2 border rounded-md" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>
          <p className="mt-2 text-gray-700">
            <strong>Range: </strong> {startDate} - {endDate}
          </p>
        </div>

        {/* Time Picker */}
        <div>
          <h2 className="text-lg font-semibold">Select Time Picker</h2>
          <input
            type="time"
            className="w-full p-2 mt-2 border rounded-md"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
          <p className="mt-2 text-gray-700">
            <strong>Selected time: </strong> {selectedTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
