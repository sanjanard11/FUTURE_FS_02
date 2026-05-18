import React from "react";
import { FaUsers } from "react-icons/fa";

const Header = () => {

  return (

    <header className="header">

      <div className="logo">

        <FaUsers className="logo-icon" />

        <div>
          <h1>LeadFlow CRM</h1>

          <p>Client Lead Management System</p>
        </div>

      </div>

    </header>

  );
};

export default Header;