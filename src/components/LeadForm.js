import React, { useState, useEffect } from "react";

const LeadForm = ({ addLead, editingLead }) => {

  const [lead, setLead] = useState({
    name: "",
    email: "",
    source: "",
    status: "New",
    notes: "",
  });

  useEffect(() => {

    if (editingLead) {
      setLead(editingLead);
    }

  }, [editingLead]);

  const handleChange = (e) => {

    setLead({
      ...lead,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addLead(lead);

    setLead({
      name: "",
      email: "",
      source: "",
      status: "New",
      notes: "",
    });

  };

  return (

    <form
      className="lead-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="name"
        placeholder="Client Name"
        value={lead.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Client Email"
        value={lead.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="source"
        placeholder="Lead Source"
        value={lead.source}
        onChange={handleChange}
        required
      />

      <select
        name="status"
        value={lead.status}
        onChange={handleChange}
      >

        <option>New</option>

        <option>Contacted</option>

        <option>Converted</option>

      </select>

      <textarea
        name="notes"
        placeholder="Notes"
        value={lead.notes}
        onChange={handleChange}
      ></textarea>

      <button type="submit">
        {editingLead ? "Update Lead" : "Add Lead"}
      </button>

    </form>
  );
};

export default LeadForm;