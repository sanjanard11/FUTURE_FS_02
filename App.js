import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import "./App.css";

function App() {

  const [leads, setLeads] = useState(() => {
    const savedLeads = localStorage.getItem("crm-leads");
    return savedLeads ? JSON.parse(savedLeads) : [];
  });

  const [editingLead, setEditingLead] = useState(null);

  useEffect(() => {
    localStorage.setItem("crm-leads", JSON.stringify(leads));
  }, [leads]);

  const addLead = (lead) => {

    if (editingLead) {

      setLeads(
        leads.map((item) =>
          item.id === editingLead.id ? lead : item
        )
      );

      setEditingLead(null);

    } else {

      setLeads([
        ...leads,
        {
          ...lead,
          id: Date.now(),
        },
      ]);

    }
  };

  const deleteLead = (id) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  const editLead = (lead) => {
    setEditingLead(lead);
  };

  return (
    <div className="app">

      <Header />

      <Dashboard leads={leads} />

      <LeadForm
        addLead={addLead}
        editingLead={editingLead}
      />

      <LeadList
        leads={leads}
        deleteLead={deleteLead}
        editLead={editLead}
      />

    </div>
  );
}

export default App;
