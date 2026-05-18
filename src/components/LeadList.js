import React from "react";
import LeadCard from "./LeadCard";

const LeadList = ({ leads, deleteLead, editLead }) => {

  return (

    <div className="lead-list">

      <h2 className="section-heading">
        Client Leads
      </h2>

      {leads.length === 0 ? (

        <p className="empty-text">
          No leads added yet.
        </p>

      ) : (

        leads.map((lead) => (

          <LeadCard
            key={lead.id}
            lead={lead}
            deleteLead={deleteLead}
            editLead={editLead}
          />

        ))

      )}

    </div>
  );
};

export default LeadList;