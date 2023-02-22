import React, { Component } from "react";
import { ChevronRight } from "react-feather";
import SetGoal from "./Edit/SetGoal";
import Pixel from "./Pixel";
import Notification from "../apps/Edit/Notification";
import PositionTable from "../../apps/todo/PositionTable";
import * as Icon from "react-feather";
import Stepper from "bs-stepper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import "../../../assets/scss/pages/edit-campaign.scss";
class CampaignEdit extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div id="stepper1" class="bs-stepper">
          <div class="bs-stepper-header">
            <div class="step" data-target="#test-l-1">
              <button class="step-trigger">
                <span class="bs-stepper-circle">1</span>
                <span class="bs-stepper-label">Confirm Pixel</span>
              </button>
              <Icon.ChevronRight
                size={22}
                className=" fonticon-wrap"
                onClick={() => this.stepper.next()}
              />
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-2">
              <button class="step-trigger">
                <span class="bs-stepper-circle">2</span>
                <span class="bs-stepper-label">Create Goal And Set Goal</span>
              </button>
              <Icon.ChevronRight
                size={22}
                className=" fonticon-wrap"
                onClick={() => this.stepper.next()}
              />
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-3">
              <button class="step-trigger">
                <span class="bs-stepper-circle">3</span>
                <span class="bs-stepper-label">Notification</span>
              </button>
              <Icon.ChevronRight
                size={22}
                className=" fonticon-wrap"
                onClick={() => this.stepper.next()}
              />
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-4">
              <button class="step-trigger">
                <span class="bs-stepper-circle">4</span>
                <div className="d-flex">
                  <span class="bs-stepper-label">Display</span>
                </div>
              </button>
              <Icon.ChevronRight
                size={22}
                className=" fonticon-wrap"
                onClick={() => this.stepper.next()}
              />
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-5">
              <button class="step-trigger">
                <span class="bs-stepper-circle">5</span>
                <span class="bs-stepper-label">Publish</span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <div id="test-l-1" class="content">
              <Pixel />
            </div>
            <div id="test-l-2" class="content">
              <SetGoal />
            </div>
            <div id="test-l-3" class="content">
              <Notification />
            </div>
            <div id="test-l-4" class="content ">
              <PositionTable />
            </div>
            <div id="test-l-5" class="content">
              <PositionTable />
            </div>
            {/* <form onSubmit={this.onSubmit}>
             
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}
export default CampaignEdit;

// // ** React Imports
// import React, { Fragment, useState } from "react";
// // ** Reactstrap Imports
// import { Card, CardBody, Row, Col } from "reactstrap";
// import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
// // ** Icons Imports
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bs-stepper/dist/css/bs-stepper.min.css";
// import Stepper from "bs-stepper";
// import {
//   Calendar,
//   File,
//   Plus,
//   Settings,
//   Users,
//   Bell,
//   Send,
// } from "react-feather";
// import * as Icon from "react-feather";
// // import Breadcrumbs from "@components/breadcrumbs";

// // ** User Components
// import "../../../assets/scss/pages/edit-campaign.scss";
// import classnames from "classnames";
// import CreateGoal from "./Edit/CreateGoal";
// import Notification from "../apps/Edit/Notification";
// import CaptureData from "./Edit/CaptureData";
// import DisplaySite from "./DisplaySite";
// import PositionTable from "../../apps/todo/PositionTable";
// import Pixel from "./Pixel";
// // import TodoList from "../../apps/todo/TodoList";
// import ConfirmPixel from "../../apps/campaign/ConfirmPixel";
// import SetGoal from "./Edit/SetGoal";
// const CampaignEdit = () => {
//   const [active, setActive] = useState("1");
//   const toggleTab = (tab) => {
//     if (active !== tab) {
//       setActive(tab);
//     }
//   };
//   return (
//     <>
//       <Row>
//         <Col xl="12" xs={{ order: 0 }} md={{ order: 1, size: 12 }}>
//           <Fragment>
//             <Nav pills className="mb-3">
//               <NavItem>
//                 <NavLink
//                   active={active === "1"}
//                   onClick={() => toggleTab("1")}
//                   className="navLink"
//                 >
//                   <Users className="iconSize" size={15} />
//                   <span className="fs-6">CONFIRM PIXEL</span>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   active={active === "2"}
//                   onClick={() => toggleTab("2")}
//                   className="navLink"
//                 >
//                   <Plus className="iconSize" size={15} />
//                   {/* <span className="fs-6">My Forms</span> */}
//                   <span className="fs-6">CREATE GOAL AND SET GOAL</span>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   active={active === "3"}
//                   onClick={() => toggleTab("3")}
//                   className="navLink"
//                 >
//                   <Icon.Bell className="iconSize" size={15} />
//                   <span className="fs-6">NOTIFICATIONS</span>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   active={active === "4"}
//                   onClick={() => toggleTab("4")}
//                   className="navLink"
//                 >
//                   <File className="iconSize" size={15} />
//                   <span className="fs-6">DISPLAY</span>
//                 </NavLink>
//               </NavItem>
//               <NavItem className="">
//                 <NavLink
//                   active={active === "5"}
//                   onClick={() => toggleTab("5")}
//                   className="navLink"
//                 >
//                   <Icon.Send className="iconSize" size={15} />
//                   <span className="fs-6">PUBLISH</span>
//                 </NavLink>
//               </NavItem>
//             </Nav>

//             <TabContent activeTab={active}>
//               <TabPane tabId="1">
//                 <Pixel />
//               </TabPane>
//               <TabPane tabId="2">
//                 <SetGoal />
//               </TabPane>
//               <TabPane tabId="3">
//                 <Notification />
//               </TabPane>
//               <TabPane tabId="4">
//                 <PositionTable />
//               </TabPane>
//               {/* <TabPane tabId="5">
//                 <Setting />
//               </TabPane> */}
//             </TabContent>
//           </Fragment>
//         </Col>
//       </Row>
//     </>
//   );
// };
// export default CampaignEdit;
