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
import DisplaySite from "./DisplaySite";

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
                <div className="stepperSetup">
                  <p className="px">Pixel</p>
                  <p className="px1">Confirm and Install</p>
                </div>
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
                <div className="stepperSetup">
                  <p className="px">Goal</p>
                  <p className="px1">Create and Set</p>
                </div>
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
                <span class="bs-stepper-label ">Notification</span>
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
                  <span class="bs-stepper-label textpara">Display</span>
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
                <span class="bs-stepper-label textpara">Publish</span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            {/* <div id="test-l-1" class="content">
              <SwitchData />
            </div> */}
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
              <DisplaySite />
            </div>
            <div id="test-l-5" class="content">
              <PositionTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CampaignEdit;
