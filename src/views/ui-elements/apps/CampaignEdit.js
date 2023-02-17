// ** React Imports
import React, { Fragment, useState } from "react";
// ** Reactstrap Imports

import { Card, CardBody, Row, Col } from "reactstrap";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
// ** Icons Imports
import {
  Calendar,
  File,
  Plus,
  Settings,
  Users,
  Bell,
  Send,
} from "react-feather";
import * as Icon from "react-feather";

// import Breadcrumbs from "@components/breadcrumbs";

// ** User Components
import "../../../assets/scss/pages/edit-campaign.scss";
import classnames from "classnames";
import CreateGoal from "./Edit/CreateGoal";
import Notification from "../apps/Edit/Notification";
import CaptureData from "./Edit/CaptureData";
import DisplaySite from "./DisplaySite";
import PositionTable from "../../apps/todo/PositionTable";
import Pixel from "./Pixel";
import TodoList from "../../apps/todo/TodoList";
import ConfirmPixel from "../../apps/campaign/ConfirmPixel";
const CampaignEdit = () => {
  const [active, setActive] = useState("1");
  const toggleTab = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  return (
    <>
      <Row>
        <Col xl="12" xs={{ order: 0 }} md={{ order: 1, size: 12 }}>
          <Fragment>
            <Nav pills className="mb-3">
              <NavItem>
                <NavLink
                  active={active === "1"}
                  onClick={() => toggleTab("1")}
                  className="navLink"
                >
                  <Users className="iconSize" size={15} />
                  <span className="fs-6">CONFIRM PIXEL</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "2"}
                  onClick={() => toggleTab("2")}
                  className="navLink"
                >
                  <Plus className="iconSize" size={15} />
                  {/* <span className="fs-6">My Forms</span> */}
                  <span className="fs-6">CREATE GOAL AND SET GOAL</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "3"}
                  onClick={() => toggleTab("3")}
                  className="navLink"
                >
                  <Icon.Bell className="iconSize" size={15} />
                  <span className="fs-6">NOTIFICATIONS</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "4"}
                  onClick={() => toggleTab("4")}
                  className="navLink"
                >
                  <File className="iconSize" size={15} />
                  <span className="fs-6">DISPLAY</span>
                </NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink
                  active={active === "5"}
                  onClick={() => toggleTab("5")}
                  className="navLink"
                >
                  <Icon.Send className="iconSize" size={15} />
                  <span className="fs-6">PUBLISH</span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={active}>
              <TabPane tabId="1">
                <Pixel />
                <PositionTable />
                {/* <ConfirmPixel /> */}
              </TabPane>
              <TabPane tabId="2">
                <Notification />
              </TabPane>
              <TabPane tabId="3">
                <CaptureData />
              </TabPane>
              <TabPane tabId="4">
                <PositionTable />
              </TabPane>
              {/* <TabPane tabId="5">
                <Setting />
              </TabPane> */}
            </TabContent>
          </Fragment>
        </Col>
      </Row>
    </>
  );
};
export default CampaignEdit;
