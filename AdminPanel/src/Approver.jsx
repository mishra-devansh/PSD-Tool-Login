import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Header from './Header'; // Import Header component

function Approver() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="main-content">
        <h1>Approver Dashboard</h1>
        <p>Welcome to the Approver Dashboard. Here you can review and approve content.</p>

        {/* Add Approver-specific content and functionality here */}
        <div>
          <h2>Pending Approvals</h2>
          {/* List of items waiting for approval */}
        </div>

        <div>
          <h2>Approval History</h2>
          {/* Display history of approved/rejected items */}
        </div>
      </div>
    </div>
  );
}

export default Approver;
