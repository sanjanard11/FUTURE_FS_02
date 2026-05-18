import React from "react";
import { FaUserPlus, FaCheckCircle, FaClock } from "react-icons/fa";

const Dashboard = ({ leads }) => {

  const newLeads =
    leads.filter((lead) => lead.status === "New").length;

  const contacted =
    leads.filter((lead) => lead.status === "Contacted").length;

  const converted =
    leads.filter((lead) => lead.status === "Converted").length;

  return (

    <div className="dashboard">

      <div className="card">

        <FaUserPlus className="card-icon" />

        <h2>{newLeads}</h2>

        <p>New Leads</p>

      </div>

      <div className="card">

        <FaClock className="card-icon" />

        <h2>{contacted}</h2>

        <p>Contacted</p>

      </div>

      <div className="card">

        <FaCheckCircle className="card-icon" />

        <h2>{converted}</h2>

        <p>Converted</p>

      </div>

    </div>
  );
};

export default Dashboard;