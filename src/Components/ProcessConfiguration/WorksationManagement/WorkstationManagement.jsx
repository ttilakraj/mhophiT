import React from "react";
import "./WorkstationManagement.css";
import { Card, Row, Col, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../../Pages/Header";
import Sidebar from "../../../Pages/Sidebar";

const WorkstationManagement = () => {
  const navigate = useNavigate();

  const goTosetup = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="workstation-management-container card">
        <Container className="mt-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-outline-secondary me-2"
              onClick={goTosetup}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <h2 className="text-center">Workstation Detail Page</h2>
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
                          <h3 className="text-center">Add New Workstation</h3>
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
                              <Form.Label>Activity</Form.Label>
                              <Form.Select>
                                <option value="option35">Select option</option>
                                <option value="option1">BLANKING</option>
                                <option value="option2">PIERCING</option>
                                <option value="option3">DRAWING</option>
                                <option value="option4">FIN ROLLING</option>
                                <option value="option5">
                                  MANUAL CORE ASSY
                                </option>
                                <option value="option6">WELDING</option>
                                <option value="option7">LEAK TESTING</option>
                                <option value="option8">
                                  WELDING (01 IC 15 0000)
                                </option>
                                <option value="option9">
                                  WELDING (01 IC 32 0000)
                                </option>
                                <option value="option10">
                                  SEMI AUTO CORE ASSY
                                </option>
                                <option value="option11">FORMING</option>
                                <option value="option12">FORMING(ES)</option>
                                <option value="option13">
                                  WELDING(01 IC 69 0000)
                                </option>
                                <option value="option14">
                                  WELDING(01 IC 77 0000)
                                </option>
                                <option value="option15">BRAZING</option>
                                <option value="option16">
                                  WELDING(01 IC 78 0000)
                                </option>
                                <option value="option17">
                                  WELDING(01 IC 84 0000)
                                </option>
                                <option value="option18">ASSY WELDING</option>
                                <option value="option19">AUTO CORE ASSY</option>
                                <option value="option20">FORMING I</option>
                                <option value="option21">FORMING II</option>
                                <option value="option23">FORMING III</option>
                                <option value="option24">NOTCHING(ES)</option>
                                <option value="option25">CLINCHING</option>
                                <option value="option26">
                                  WELDING (06 IC 7 0000)
                                </option>
                                <option value="option27">
                                  WELDING (06 IC 79)
                                </option>
                                <option value="option28">
                                  PIERCING AND DRAWING
                                </option>
                                <option value="option29">DRAWING II</option>
                                <option value="option30">CORE ASSEMBLY</option>
                                <option value="option31">
                                  LEAK TESTING (R)
                                </option>
                                <option value="option32">
                                  LIB NOTCHING (R)
                                </option>
                                <option value="option33">
                                  END LIB NOTCHING
                                </option>
                                <option value="option34">
                                  WELDING (07 IC 04 0000)
                                </option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <br />
                          <div className="d-flex justify-content-end">
                            <Button className="me-2" variant="outline-success">
                              Reset
                            </Button>{" "}
                            <Button variant="success">Add Workstation</Button>{" "}
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
                        <th>Activity Name</th>
                        <th>Status</th>
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
                  <h2 className="text-center">
                    Workstation Capacity by Products
                  </h2>
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
