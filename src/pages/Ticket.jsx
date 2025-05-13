import React from 'react';
import { useTicket } from '../context/ticketContext.jsx';
import Button from '../components/Button';
import Typography from '../components/Typography';
import CompactTicket from '../components/TicketComponent'; // Import the new component

const Ticket = () => {
  const { ticketData } = useTicket();

  return (
    <div className="ticket-container">
      {/* Header Section */}
      <div className="ticket-header">
        <Typography variant="heading1 mb-4">Your Journey to Wasserstoff Innovation Starts Here</Typography>
        <Typography variant="subheading">Secure your spot at next year's biggest coding conference</Typography>
      </div>

      {/* Success Message */}
      <div className="success-message">
        <Typography variant="heading2">Congrats, {ticketData.fullName || 'Attendee'}!</Typography>
        <Typography variant="paragraph">Your ticket is ready.</Typography>
      </div>

      {/* Main Ticket Card */}
      <div className="ticket-card">
        {/* Email Confirmation */}
        <div className="confirmation-message">
          <Typography variant="paragraph">
            We've emailed your ticket to<br />
            <span className="email">{ticketData.email || 'your@email.com'}</span> and will send updates in the run up to the event.
          </Typography>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Replaced the original event/user info with CompactTicket */}
        <CompactTicket
          eventName="Wasserstoff Innovation"
          eventDate="Jan 31, 2025"
          eventLocation="Gurugram"
          userName={ticketData.fullName || 'Your Name'}
          userHandle={`@${ticketData.github || 'yourusername'}`}
          avatar={ticketData.avatar}
        />
      </div>

      {/* Download Button */}
      <Button 
        onClick={() => alert('Download feature coming soon!')} 
        variant="primary"
        className="download-button"
      >
        Download Ticket
      </Button>
    </div>
  );
};

export default Ticket;