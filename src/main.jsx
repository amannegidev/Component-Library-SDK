import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemoProfile from './pages/Profile';
import DemoTicket from './pages/Ticket';
import { TicketProvider } from "./context/ticketContext"
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TicketProvider>
        <Routes>
          <Route path="/" element={<DemoProfile />} />
          <Route path="/ticket" element={<DemoTicket />} />
        </Routes>
      </TicketProvider>
    </BrowserRouter>
  </React.StrictMode>
);
