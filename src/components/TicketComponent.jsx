import React from 'react';
import PropTypes from 'prop-types';

const TicketWithAvatar = ({ 
  eventName = "",
  eventDate = "",
  eventLocation = "",
  userName = "",
  userHandle = "",
  avatar = null
}) => {
  return (
    <div className="avatar-ticket">
      {/* Event Header */}
      <div className="ticket-header">
        <h1 className="event-title">{eventName}</h1>
        <p className="event-details">{eventDate} / {eventLocation}</p>
      </div>
      
      
      {/* User Info with Avatar */}
      <div className="user-section">
        {avatar && (
          <img 
            src={typeof avatar === 'string' ? avatar : URL.createObjectURL(avatar)} 
            alt="User avatar" 
            className="user-avatar"
          />
        )}
        <div className="user-info">
          <h2 className="user-name">{userName}</h2>
          <p className="user-handle">{userHandle}</p>
        </div>
      </div>
    </div>
  );
};

TicketWithAvatar.propTypes = {
  eventName: PropTypes.string,
  eventDate: PropTypes.string,
  eventLocation: PropTypes.string,
  userName: PropTypes.string,
  userHandle: PropTypes.string,
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

export default TicketWithAvatar;