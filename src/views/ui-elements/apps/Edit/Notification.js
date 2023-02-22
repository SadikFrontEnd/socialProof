import React from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CardHeader,
  CardTitle,
  Input,
  CustomInput,
} from "reactstrap";
import Select from "react-select";
import "../../../../assets/scss/pages/campaign.scss";
import count from "../../../../assets/img/svg/CountPulse.svg";
import card from "../../../../assets/img/svg/card.svg";
import fire from "../../../../assets/img/svg/fire.svg";
import groupImg from "../../../../assets/img/svg/bulkpng.png";

const category = [
  { value: "Rounded", label: "Rounded" },
  { value: "Boxy", label: "Boxy" },
];
class Notification extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody className="p-0">
                <div className="firstCard">
                  <img src={groupImg} alt="groupImg" width={100} height={100} />
                  <div className="cardTitle">Recently Activity</div>
                  <p>
                    Show individual people that
                    <br /> recently signed up
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody className="p-0">
                <div className="firstCard">
                  <img src={count} alt="CountPulse" width={100} height={100} />
                  <div className="cardTitle">Live visitors count</div>
                  <p>
                    Show how many people are <br /> currently pn your page
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody className="p-0">
                <div className="firstCard">
                  <img src={fire} alt="fire" width={100} height={100} />
                  <div className="cardTitle">HOT STEAKS</div>
                  <p>
                    Show the total visitors or <br /> signups over a period of
                    time
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* <h1 className="text-center">
            Make any optional customizations to your campaign below.
          </h1> */}
          <Col lg="6" md="6" sm="12">
            <Card className="cardChange hi-1">
              <CardHeader className="notifiCard">
                <CardTitle className="r">Appearance</CardTitle>
              </CardHeader>
              <CardBody className="">
                <div className="innerAppearance">
                  <div>Hide notifications on mobile</div>
                  <div className="d-flex">
                    <div>
                      <span>OFF</span>
                    </div>
                    <CustomInput
                      className="custom-switch-success mr-1 ml-2 mb-2"
                      type="switch"
                      id="success"
                      name="success"
                      inline
                    ></CustomInput>
                  </div>
                </div>

                <div className="innerAppearance">
                  <div>Show on top of page on mobile</div>
                  <div className="d-flex">
                    <div>
                      <span>OFF</span>
                    </div>
                    <CustomInput
                      className="custom-switch-success mr-1 ml-2 mb-2"
                      type="switch"
                      id="success"
                      name="success"
                      inline
                    ></CustomInput>
                  </div>
                </div>
                <div className="innerAppearance">
                  <div>Position notifications on</div>
                  <div className="d-flex">
                    <div>
                      <span>OFF</span>
                    </div>
                    <CustomInput
                      className="custom-switch-success mr-1 ml-2 mb-2"
                      type="switch"
                      id="success"
                      name="success"
                      inline
                    ></CustomInput>
                  </div>
                </div>
                <div className="innerAppearance">
                  <div>Notification Theme</div>
                  <div className="d-flex">
                    <Select
                      className="React customselect"
                      name="category"
                      options={category}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card className="cardChange hi-1">
              <CardHeader className="notifiCard">
                <CardTitle> Timing?</CardTitle>
              </CardHeader>
              <CardBody className="">
                <div className="d-flex my-1 ">
                  <div className="mr-1"> Delay the first notification for</div>
                  <div>
                    <span className="">
                      <Input
                        type="number"
                        placeholder="0"
                        className="inputTime"
                      />
                    </span>
                  </div>
                  <span className="ml-1"> seconds</span>
                </div>
                <div className="d-flex my-1 ">
                  <div className="mr-1">Display each notification for</div>
                  <div>
                    <span className="">
                      <Input
                        type="number"
                        placeholder="7"
                        className="inputTime"
                      />
                    </span>
                  </div>
                  <span className="ml-1"> seconds</span>
                </div>
                <div className="d-flex my-1">
                  <div className="mr-1">Position notifications on</div>
                  <div>
                    <span className="">
                      <Input
                        type="number"
                        placeholder="3"
                        className="inputTime"
                      />
                    </span>
                  </div>
                  <span className="ml-1"> seconds apart</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Notification;
