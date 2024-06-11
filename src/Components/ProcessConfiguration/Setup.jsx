import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import "../Inventory/Inventory.css";
import Header from "../../Pages/Header";
import Sidebar from "../../Pages/Sidebar";

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import InventoryIcon from '@mui/icons-material/Inventory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';

const Setup = () => {
  const navigate = useNavigate();

  const handleUser = () => {
    navigate("/departments");
  };

  const handleDepartment = () => {
    navigate("/department-management");
  };

  const handleActivity = () => {
    navigate("/activity-management");
  };

  const handleWorkstation = () => {
    navigate("/workstation-management");
  };

  const handleProduct = () => {
    navigate("/departments");
  };

  const handleProduction = () => {
    navigate("/productionline-management");
  };

  const handleTeam = () => {
    navigate("/team-management");
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="inventory-container card">
        <Container className="mt-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="text-center mb-4">Process Configuration Centre</h2>
          </div>
          <Row>
            <Col
              xs={12}
              sm={6}
              md={4}
              className="mb-4"
              
            >
              <Card
                style={{
                  height: "10rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px",
                  cursor: "pointer"
                }}
                onClick={handleUser}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Manage Users</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      No of Users: 16
                    </Card.Text>
                  </div>
                  <div><AssignmentIndIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card
                style={{
                  height: "10rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px",
                  cursor: "pointer"
                }}
                onClick={handleDepartment}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Manage Departments</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      No of Departments: 16
                    </Card.Text>
                  </div>
                  <div><HomeIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card
                style={{
                  height: "10rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px",
                  cursor: "pointer"
                }}
                onClick={handleActivity}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Manage Activities</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      No of Activities: 16
                    </Card.Text>
                  </div>
                  <div><PendingActionsIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card
                style={{
                  height: "10rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px",
                  cursor: "pointer"
                }}
                onClick={handleWorkstation}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Manage Workstations</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      No of Workstations: 16
                    </Card.Text>
                  </div>
                  <div><HomeWorkIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card
                style={{
                  height: "10rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px",
                  cursor: "pointer"
                }}
                onClick={handleProduct}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Manage Products</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      No of Products: 16
                    </Card.Text>
                  </div>
                  <div><InventoryIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card
                style={{
                  height: "10rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px",
                  cursor: "pointer"
                }}
                onClick={handleProduction}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Manage Production Line</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      No of Prodcution Line: 16
                    </Card.Text>
                  </div>
                  <div><PrecisionManufacturingIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card
                style={{
                  height: "10rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px",
                  cursor: "pointer"
                }}
                onClick={handleTeam}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Manage teams</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      No of Teams: 16
                    </Card.Text>
                  </div>
                  <div><GroupsIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Setup;
