import React from "react";
import "./WorkstationManagement.css";
import { Card, Row, Col, Button, Container, Form } from "react-bootstrap";
import Header from "../../../Pages/Header";
import Sidebar from "../../../Pages/Sidebar";


const WorkstationManagement = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="workstation-management-container card">
        <Container className="mt-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="text-center">Workstation Detail Page</h2>
            <div className="d-flex justify-content-between">
             
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => window.location.reload()}
              >
                <i className="bi bi-arrow-clockwise"></i>
              </button>
              <button type="button" className="btn btn-outline-secondary">
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
          <Col>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-2"
                    >
                      <i className="bi bi-funnel"></i> Filters
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      <i className="bi bi-download"></i> Download
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr class="table-header">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        tabIndex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Col>
          <br />
          <hr />
          <Col>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-center">Workstation Capacity by Products</h2>
                </div>
              </div>
            </div>

          </Col>
          <br />
        </Container>
      </div>
    </div>
  );
};

export default WorkstationManagement;
