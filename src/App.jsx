import { useState } from "react";
import NavBar from "./components/NavBar";
import TaskCard from "./components/TaskCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Tickets from "./components/Tickets";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";
import TicketDetails from "./components/TicketDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/addNew" element={<TaskForm />} />
          <Route path="/ticket/:id" element={<TicketDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
