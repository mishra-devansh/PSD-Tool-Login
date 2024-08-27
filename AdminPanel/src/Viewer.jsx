import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Header from './Header'; // Import Header component

function Viewer() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="main-content">
        <h1>Viewer Dashboard</h1>
        <p>Welcome to the Viewer Dashboard. Here you can browse and view content.</p>

        {/* Add Viewer-specific content and functionality here */}
        <div>
          <h2>Browse Available Projects</h2>
          {/* List of projects or content to view */}
        </div>

        <div>
          <h2>View Project Details</h2>
          {/* Detailed view of a selected project */}
        </div>
      </div>
    </div>
  );
}

export default Viewer;
