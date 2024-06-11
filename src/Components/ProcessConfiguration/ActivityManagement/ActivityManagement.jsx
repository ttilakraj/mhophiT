import React from "react";
import "./ActivityManagement.css";
import { Card, Row, Col, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../../Pages/Header";
import Sidebar from "../../../Pages/Sidebar";

const ActivityManagement = () => {

  const navigate = useNavigate();

  const goTosetup = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="department-management-container card">
        <Container className="mt-4">
          <div className="card-header d-flex justify-content-between align-items-center">
          <button
              type="button"
              className="btn btn-outline-secondary me-2"
              onClick={goTosetup}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <h2 className="text-center">Activities Detail Page</h2>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => window.location.reload()}
              >
                <i className="bi bi-arrow-clockwise"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-plus-circle"></i>
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="card p-3">
                        <Form>
                          <h3 className="text-center">Add New Activity</h3>
                          <Col>
                            <Form.Group controlId="formWorkstation">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="formWorkstation">
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="description" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="formWorkstation">
                              <Form.Label>Department</Form.Label>
                              <Form.Select>
                                <option value="option1">Select option</option>
                                
                                <option value="option2">Administrator</option>
                                <option value="option3">Press</option>
                                <option value="option4">Sheet Mill</option>
                                <option value="option5">
                                  Fabrication
                                </option>
                                <option value="option6">Furnace</option>
                                <option value="option7">Assembly</option>
                                <option value="option7">Testing</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <br />
                          <div className="d-flex justify-content-end">
                            <Button className="me-2" variant="outline-success">
                              Reset
                            </Button>{" "}
                            <Button variant="success">Add Activity</Button>{" "}
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                        <th>Department Name</th>
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
        </Container>
      </div>
    </div>
  );
};

export default ActivityManagement;
