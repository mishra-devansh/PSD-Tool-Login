import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Header from './Header'; // Import Header component

function Creator() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="main-content">
        <h1>Creator Dashboard</h1>
        <p>Welcome to the Creator Dashboard. Here you can manage content creation tasks.</p>

        {/* Add Creator-specific content and functionality here */}
        <div>
          <h2>Create New Project</h2>
          <button>Create Project</button>
          {/* Add form or other elements as needed */}
        </div>

        <div>
          <h2>Manage Your Projects</h2>
          {/* List or manage existing projects here */}
        </div>
      </div>
    </div>
  );
}

export default Creator;
