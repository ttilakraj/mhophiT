import { useCallback } from "react";
import "./DashboardComponent.css";

const Dashboard = () => {
  const onFrameContainer1Click = useCallback(() => {
    // Please sync "ORDERS-CREATE" to the project
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <div className="header-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <img className="header-item" alt="" src="/group-4.svg" />
        <img className="header-inner" alt="" src="/group-3.svg" />
        <div className="rectangle-parent">
          <div className="group-child" />
          <img
            className="magnifying-glass-1-icon"
            alt=""
            src="/magnifyingglass-1.svg"
          />
          <div className="search-for-something">Search for something</div>
        </div>
        <div className="dashboard-parent">
          <div className="view-all">Dashboard</div>
          <div className="create-order-parent">
            <div className="create-order">Create Order</div>
            <img className="plus-icon" alt="" src="/plusicon.svg" />
          </div>
        </div>
      </div>
      <div className="dashboard-child" />
      <div className="menu-top">
        <div className="menu-active">
          <div className="menu-active-child" />
          <img className="dashboard-icon" alt="" src="/dashboardicon.svg" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img className="dashboard-icon" alt="" src="/ordersicon.svg" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img className="dashboard-icon" alt="" src="/assignmenticon.svg" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img className="dashboard-icon" alt="" src="/planicon.svg" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img className="dashboard-icon" alt="" src="/materialicon.svg" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img className="dashboard-icon" alt="" src="/inventoryicon.svg" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img
            className="dashboard-icon"
            alt=""
            src="/materialmovementicon.svg"
          />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img className="dashboard-icon" alt="" src="/workstationicon.svg" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img
            className="dashboard-icon"
            alt=""
            src="/processviolationicon.svg"
          />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img className="rejection-icon" alt="" src="/rejectionicon@2x.png" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <img className="dashboard-icon" alt="" src="/issuesicon.svg" />
        </div>
        <div className="menu-active1">
          <div className="menu-active-item" />
          <div className="dashboard-icon">
            <div className="group">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="frame-container">
            <div className="frame-group">
              <div className="card">
                <div className="frame-div">
                  <div className="number-of-active-orders-parent">
                    <div className="number-of-active">
                      Number of Active Orders
                    </div>
                    <b className="b">50</b>
                  </div>
                  <div className="up-arrow-icon-wrapper">
                    <img
                      className="up-arrow-icon"
                      alt=""
                      src="/uparrowicon@2x.png"
                    />
                  </div>
                </div>
                <div className="info-icon-parent">
                  <img className="plus-icon" alt="" src="/infoicon.svg" />
                  <div className="number-of-active1">
                    Number of Active Orders
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="frame-div">
                  <div className="total-number-of-work-cards-parent">
                    <div className="total-number-of">
                      Total Number of Work Cards
                    </div>
                    <b className="b1">10</b>
                  </div>
                  <div className="frame-wrapper">
                    <div className="ellipse-parent">
                      <div className="frame-child" />
                      <div className="frame-item" />
                      <div className="div">50%</div>
                    </div>
                  </div>
                </div>
                <div className="info-icon-group">
                  <img className="plus-icon" alt="" src="/infoicon1.svg" />
                  <div className="completed-cards">5 completed cards</div>
                </div>
              </div>
            </div>
            <div className="frame-group">
              <div className="card2">
                <div className="frame-div">
                  <div className="total-number-of-work-cards-parent">
                    <div className="total-number-of">
                      Total Number of Issues
                    </div>
                    <b className="b2">13</b>
                  </div>
                  <img className="plan-icon1" alt="" src="/planicon1.svg" />
                </div>
                <img className="card-child" alt="" src="/vector-1.svg" />
                <div className="frame-parent3">
                  <div className="info-icon-container">
                    <img className="plus-icon" alt="" src="/infoicon1.svg" />
                    <div className="completed-cards">7 Issues are critical</div>
                  </div>
                  <div className="view-all-parent">
                    <div className="view-all">View All</div>
                    <img className="frame-icon" alt="" src="/frame.svg" />
                  </div>
                </div>
              </div>
              <div className="card3">
                <div className="frame-parent4">
                  <div className="group-parent">
                    <div className="rectangle-group">
                      <div className="group-item" />
                      <img
                        className="issues-icon1"
                        alt=""
                        src="/issuesicon1.svg"
                      />
                    </div>
                    <div className="risk-warning-activity-parent">
                      <div className="risk-warning-activity">
                        Risk Warning Activity
                      </div>
                      <b className="b3">80%</b>
                    </div>
                  </div>
                  <div className="ellipse-group">
                    <div className="frame-inner" />
                    <div className="frame-inner" />
                    <div className="frame-inner" />
                  </div>
                </div>
                <img className="card-child" alt="" src="/vector-11.svg" />
                <div className="frame-parent5">
                  <div className="info-icon-container">
                    <img className="plus-icon" alt="" src="/infoicon1.svg" />
                    <div className="completed-cards">{`2 Risk yet to resolve `}</div>
                  </div>
                  <div className="view-all-group">
                    <div className="view-all">View All</div>
                    <img className="frame-icon" alt="" src="/frame1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="orders-parent">
            <div className="view-all">Orders</div>
            <div className="frame-parent6">
              <div className="group-container">
                <img className="group-icon" alt="" src="/group-10.svg" />
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="product-name-parent">
                  <div className="product-name">Product name</div>
                  <div className="ic-00077010000">01 IC 00077010000</div>
                </div>
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="product-name-parent">
                  <div className="product-name">order quantity</div>
                  <div className="x400">X400</div>
                </div>
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="allocated-wrapper">
                  <div className="allocated">Allocated</div>
                </div>
                <div className="ellipse-group">
                  <div className="frame-inner" />
                  <div className="frame-inner" />
                  <div className="frame-inner" />
                </div>
              </div>
              <div className="group-container">
                <img className="group-icon" alt="" src="/group-10.svg" />
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="product-name-parent">
                  <div className="product-name">Product name</div>
                  <div className="ic-00077010000">06 IC 0007901100</div>
                </div>
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="product-name-parent">
                  <div className="product-name">order quantity</div>
                  <div className="x400">X500</div>
                </div>
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="allocated-wrapper">
                  <div className="allocated">Allocated</div>
                </div>
                <div className="ellipse-group">
                  <div className="frame-inner" />
                  <div className="frame-inner" />
                  <div className="frame-inner" />
                </div>
              </div>
              <div className="group-container">
                <img className="group-icon" alt="" src="/group-10.svg" />
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="product-name-parent">
                  <div className="product-name">Product name</div>
                  <div className="ic-00077010000">01 R 0003601300</div>
                </div>
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="product-name-parent">
                  <div className="product-name">order quantity</div>
                  <div className="x400">X850</div>
                </div>
                <img className="frame-child2" alt="" src="/vector-4.svg" />
                <div className="allocated-wrapper">
                  <div className="allocated">Allocated</div>
                </div>
                <div className="ellipse-group">
                  <div className="frame-inner" />
                  <div className="frame-inner" />
                  <div className="frame-inner" />
                </div>
              </div>
            </div>
            <div
              className="create-order-group"
              onClick={onFrameContainer1Click}
            >
              <div className="create-order">Create Order</div>
              <img className="plus-icon" alt="" src="/plusicon1.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent7">
          <div className="frame-parent8">
            <div className="frame-wrapper1">
              <div className="rejected-work-cards-parent">
                <div className="view-all">Rejected Work Cards</div>
                <div className="table-header">
                  <img className="shapesort-icon" alt="" src="/shapesort.svg" />
                  <div className="work-cards">work cards</div>
                  <div className="reject-reason">reject reason</div>
                  <div className="rejected-by">rejected by</div>
                  <img
                    className="shapesort-icon1"
                    alt=""
                    src="/shapesort.svg"
                  />
                  <div className="rejection-time-parent">
                    <div className="rejection-time">rejection time</div>
                    <img
                      className="shapesort-icon2"
                      alt=""
                      src="/shapesort.svg"
                    />
                  </div>
                  <div className="checkboxneutral">
                    <div className="checkboxneutral1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg">
              <div className="row">
                <div className="parent">
                  <div className="div1">#01245687</div>
                  <div className="unspecified-wrapper">
                    <div className="unspecified">unspecified</div>
                  </div>
                  <div className="ram-gopal-sharma-wrapper">
                    <div className="ram-gopal-sharma">Ram Gopal Sharma</div>
                  </div>
                  <div className="calendar-check-parent">
                    <img
                      className="plus-icon"
                      alt=""
                      src="/calendarcheck.svg"
                    />
                    <div className="div2">10-06-2023</div>
                  </div>
                  <div className="wrapper">
                    <div className="nagendra-chowdhry">12</div>
                  </div>
                </div>
                <div className="checkboxneutral-wrapper">
                  <div className="group">
                    <div className="checkboxneutral3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg">
              <div className="row">
                <div className="parent">
                  <div className="div1">#01245687</div>
                  <div className="unspecified-wrapper">
                    <div className="unspecified">unspecified</div>
                  </div>
                  <div className="ram-gopal-sharma-wrapper">
                    <div className="ram-gopal-sharma">Rupa Ganguly</div>
                  </div>
                  <div className="calendar-check-parent">
                    <img
                      className="plus-icon"
                      alt=""
                      src="/calendarcheck.svg"
                    />
                    <div className="div2">10-06-2023</div>
                  </div>
                  <div className="wrapper">
                    <div className="nagendra-chowdhry">12</div>
                  </div>
                </div>
                <div className="checkboxneutral-wrapper">
                  <div className="group">
                    <div className="checkboxneutral3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg">
              <div className="row">
                <div className="parent">
                  <div className="div1">#01245687</div>
                  <div className="unspecified-wrapper">
                    <div className="unspecified">unspecified</div>
                  </div>
                  <div className="ram-gopal-sharma-wrapper">
                    <div className="ram-gopal-sharma">Ricky Martin</div>
                  </div>
                  <div className="calendar-check-parent">
                    <img
                      className="plus-icon"
                      alt=""
                      src="/calendarcheck.svg"
                    />
                    <div className="div2">10-06-2023</div>
                  </div>
                  <div className="wrapper">
                    <div className="nagendra-chowdhry">12</div>
                  </div>
                </div>
                <div className="checkboxneutral-wrapper">
                  <div className="group">
                    <div className="checkboxneutral3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg">
              <div className="row">
                <div className="parent">
                  <div className="div1">#01245687</div>
                  <div className="unspecified-wrapper">
                    <div className="unspecified">unspecified</div>
                  </div>
                  <div className="ram-gopal-sharma-wrapper">
                    <div className="ram-gopal-sharma">Jonathan Smith</div>
                  </div>
                  <div className="calendar-check-parent">
                    <img
                      className="plus-icon"
                      alt=""
                      src="/calendarcheck.svg"
                    />
                    <div className="div2">10-06-2023</div>
                  </div>
                  <div className="wrapper">
                    <div className="nagendra-chowdhry">12</div>
                  </div>
                </div>
                <div className="checkboxneutral-wrapper">
                  <div className="group">
                    <div className="checkboxneutral3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg4">
              <div className="row">
                <div className="parent">
                  <div className="div1">#01245687</div>
                  <div className="unspecified-wrapper">
                    <div className="unspecified">unspecified</div>
                  </div>
                  <div className="ram-gopal-sharma-wrapper">
                    <div className="nagendra-chowdhry">Nagendra Chowdhry</div>
                  </div>
                  <div className="calendar-check-parent">
                    <img
                      className="plus-icon"
                      alt=""
                      src="/calendarcheck.svg"
                    />
                    <div className="div2">10-06-2023</div>
                  </div>
                  <div className="wrapper">
                    <div className="nagendra-chowdhry">12</div>
                  </div>
                </div>
                <div className="checkboxneutral-wrapper">
                  <div className="group">
                    <div className="checkboxneutral3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inventory-summery-parent">
            <div className="view-all">Inventory Summery</div>
            <div className="frame-parent9">
              <div className="frame-parent10">
                <div className="frame-parent11">
                  <div className="group-wrapper">
                    <img className="group-icon" alt="" src="/group-101.svg" />
                  </div>
                  <img className="frame-child2" alt="" src="/vector-41.svg" />
                  <div className="frame-parent12">
                    <div className="type-wrapper">
                      <div className="unspecified">type</div>
                    </div>
                    <div className="raw-materials">Raw Materials</div>
                  </div>
                  <img className="frame-child2" alt="" src="/vector-2.svg" />
                  <div className="number-of-items-parent">
                    <div className="product-name">number of items</div>
                    <div className="div16">50</div>
                  </div>
                </div>
                <div className="frame-parent11">
                  <img className="group-icon" alt="" src="/group-102.svg" />
                  <img className="frame-child2" alt="" src="/vector-41.svg" />
                  <div className="frame-parent12">
                    <div className="type-wrapper">
                      <div className="unspecified">type</div>
                    </div>
                    <div className="parts">Parts</div>
                  </div>
                  <img className="frame-child2" alt="" src="/vector-2.svg" />
                  <div className="number-of-items-parent">
                    <div className="product-name">number of items</div>
                    <div className="div16">36</div>
                  </div>
                </div>
                <div className="frame-parent11">
                  <img className="group-icon" alt="" src="/group-102.svg" />
                  <img className="frame-child2" alt="" src="/vector-41.svg" />
                  <div className="frame-parent12">
                    <div className="type-wrapper">
                      <div className="unspecified">type</div>
                    </div>
                    <div className="parts">Consumables</div>
                  </div>
                  <img className="frame-child2" alt="" src="/vector-2.svg" />
                  <div className="number-of-items-parent">
                    <div className="product-name">number of items</div>
                    <div className="div16">24</div>
                  </div>
                </div>
              </div>
              <div className="load-more-wrapper">
                <div className="create-order">Load More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
