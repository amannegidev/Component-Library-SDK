import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Typography from '../components/Typography';
import AvatarUploader from '../components/AvatarUplaoder';
import { useTicket } from '../context/TicketContext';

const DemoProfile = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    github: '',
    avatar: null,
  });

  const { setTicketData } = useTicket();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarUpload = (file) => {
    setForm({ ...form, avatar: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketData(form);
    navigate('/ticket');
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <Typography variant="heading1">Your Journey to Wasserstoff Innovation Starts Here</Typography>
        <Typography variant="subheading">Secure your spot at next year's biggest coding conference</Typography>
      </div>

      <div className="upload-section">
        <AvatarUploader onUpload={handleAvatarUpload} />
        <Typography variant="caption">Upload your photo (JPG or PNG, max size: 500KB)</Typography>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <Typography variant="heading2">Full Name</Typography>
          <Input 
            name="fullName" 
            value={form.fullName} 
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <Typography variant="heading2">Email</Typography>
          <Input 
            name="email" 
            value={form.email} 
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <Typography variant="heading2">GitHub Username</Typography>
          <Input 
            name="github" 
            value={form.github} 
            onChange={handleChange}
            placeholder="Enter your GitHub username"
          />
        </div>

        <Button type="submit" variant="primary" className="generate-button">
          Generate My Ticket
        </Button>
      </form>
    </div>
  );
};

export default DemoProfile;