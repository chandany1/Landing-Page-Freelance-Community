import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="events-container">
      <div className="events-content">
        <div className="events-content-header-container">
            <span>Upcoming Events</span>
            <span>All Events</span>
        </div>
        <div className="events-grid">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        </div>
        
      </div>
    </div>
  );
};

export default Events;
