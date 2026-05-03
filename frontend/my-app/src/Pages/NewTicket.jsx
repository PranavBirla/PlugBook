import React, { useState } from "react";
import { Calendar, Clock, Download, Share2 } from "lucide-react";

const NewTicket = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="px-4 mt-4 pb-20">

      {/* Heading */}
      <h1 className="text-2xl font-semibold">My Tickets</h1>
      <p className="text-gray-500 text-sm mb-4">
        View and manage your bookings
      </p>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-full p-1 w-full mb-4">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`flex-1 py-2 rounded-full text-sm ${
            activeTab === "upcoming"
              ? "bg-black text-white"
              : "text-gray-600"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`flex-1 py-2 rounded-full text-sm ${
            activeTab === "completed"
              ? "bg-black text-white"
              : "text-gray-600"
          }`}
        >
          Completed
        </button>
      </div>

    </div>
  );
};

export default NewTicket;