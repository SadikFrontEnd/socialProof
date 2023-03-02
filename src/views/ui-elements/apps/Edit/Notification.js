import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Input,
  CustomInput,
  FormGroup,
  Label,
} from "reactstrap";
import Select from "react-select";
import "../../../../assets/scss/pages/campaign.scss";
import count from "../../../../assets/img/svg/CountPulse.svg";
import fire from "../../../../assets/img/svg/fire.svg";
import groupImg from "../../../../assets/img/svg/bulkpng.png";
import "react-toggle/style.css";
import "../../../../assets/scss/plugins/forms/switch/react-toggle.scss";
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
                <CardTitle className="cardttl">Appearance</CardTitle>
              </CardHeader>
              <CardBody className="">
                <div className="innerAppearance">
                  <div>Hide notifications on mobile</div>
                  <div className="d-flex switches">
                    <div>
                      <span>OFF</span>
                    </div>
                    <CustomInput
                      className="custom-switch-success mr-1 ml-2 mb-2"
                      type="switch"
                      id="1"
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
                      id="2"
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
                      id="3"
                      name="success"
                      inline
                    ></CustomInput>
                  </div>
                </div>
                {/* <div className="innerAppearance">
                  <div>Notification Theme</div>
                  <div className="d-flex">
                    <Select
                      className="React customselect"
                      name="category"
                      options={category}
                    />
                  </div>
                </div> */}
                <div className="mt-1 form-select innerAppearance">
                  <div>Notification Theme</div>
                  <div className="">
                    <Input
                      // onChange={handleStaus}
                      // defaultValue={statusValue}
                      type="select"
                      name="status"
                      className="form select"
                      id="status"
                    >
                      {/* <option>All Location</option> */}
                      <option value={"Rounded"}>Rounded</option>
                      <option value={"Boxy"}>Boxy</option>
                    </Input>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card className="cardChange hi-1">
              <CardHeader className="notifiCard">
                <CardTitle className="cardttl"> Timing</CardTitle>
              </CardHeader>
              <CardBody className="">
                <div className="d-flex my-2 align-items-baseline">
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
                <div className="d-flex my-3 align-items-baseline">
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
                <div className="d-flex my-3 align-items-baseline">
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
