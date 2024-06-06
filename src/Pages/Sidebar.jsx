import React from 'react';
import './Sidebar.css'; // Make sure this line is not commented out
import { Link } from 'react-router-dom';
import AddRoadIcon from '@mui/icons-material/AddRoad';

const Sidebar = ({ className = "" }) => {
  return (
    <div className={`menuTop ${className}`}>
      <Link className="menuActive1" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="active" src="/dashboardicon.svg" />
        <span>Dashboard</span>
      </Link>
      <Link className="menuActive1" to="/listOrder" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="order" src="/ordersicon.svg" />
        <span>Orders</span>
      </Link>
      
      <Link className="menuActive1"  to="/assignment" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/assignmenticon.svg" />
        <span>Assignment</span>
      </Link>
      
      <Link className="menuActive1"  to="/production-plan" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/planicon.svg" />
        <span>Production Plan</span>
      </Link>
      <Link className="menuActive1"  to="/material-status" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/materialicon.svg" />
        <span>Material Status</span>
      </Link>
      <Link className="menuActive1" to="/inventory" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/inventoryicon.svg" />
        <span>Material Inventory</span>
      </Link>
      <Link className="menuActive1" to="/listOrder" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/workstationicon.svg" />
        <span>Workstation</span>
      </Link>
      <Link className="menuActive1" to="/listOrder" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/processviolationicon.svg" />
        <span>Process Violation</span>
      </Link>
      <Link className="menuActive1" to="/listOrder" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="rejectionIcon" alt="reject" src="/rejectionicon@2x.png" />
        <span>Reject</span>
      </Link>
      <Link className="menuActive1" to="/listOrder" style={{color: 'inherit', textDecoration: "none"}}>
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/issuesicon.svg" />
        <span>Issue</span>
      </Link>
      <Link className="menuActive1" to='/setup' style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="menuActiveItem" />
        <span>
          <AddRoadIcon /> {/* Place the icon here */}
          Process configuration
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
