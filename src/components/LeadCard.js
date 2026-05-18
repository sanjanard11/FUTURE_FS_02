import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const LeadCard = ({ lead, deleteLead, editLead }) => {

  return (

    <div className="lead-card">

      <div className="lead-info">

        <h3>{lead.name}</h3>

        <p>
          <strong>Email:</strong> {lead.email}
        </p>

        <p>
          <strong>Source:</strong> {lead.source}
        </p>

        <p>
          <strong>Status:</strong> {lead.status}
        </p>

        <p>
          <strong>Notes:</strong> {lead.notes}
        </p>

      </div>

      <div className="lead-actions">

        <button
          className="edit-btn"
          onClick={() => editLead(lead)}
        >

          <FaEdit />

        </button>

        <button
          className="delete-btn"
          onClick={() => deleteLead(lead.id)}
        >

          <FaTrash />

        </button>

      </div>

    </div>
  );
};

export default LeadCard;