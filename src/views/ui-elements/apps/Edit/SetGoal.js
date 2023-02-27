import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter,
  Button,
} from "reactstrap";
import { ChevronDown } from "react-feather";
import axios from "axios";
import InputMask from "react-input-mask";
import Select from "react-select";
// import "../../../assets/scss/pages/edit-campaign.scss";
import "../../../../assets/scss/pages/set-goal.scss";
import DataTable from "react-data-table-component";
const category = [
  { value: "Lead", label: "Lead" },
  { value: "Purchase", label: "Purchase" },
  { value: "Schedule", label: "Schedule" },
  { value: "Subscribe", label: "Subscribe" },
  { value: "Start Trial", label: "Start Trial" },
  { value: "View Content", label: "View Content" },
  { value: "Complete Registration", label: "Complete Registration" },
];
const columns = [
  {
    name: "PRIMARY GOALS",
    selector: "id",
    sortable: true,
  },
  {
    name: "ADDITIONAL GOALS TRACKED",
    selector: "first_name",
    sortable: true,
  },
];

const data = [
  {
    id: "Alyss",
    first_name: "Alyss",
  },
  {
    id: "Shep",
    first_name: "Shep",
  },
  {
    id: "Gasper",
    first_name: "Gasper",
  },
  {
    id: "Phaedra",
    first_name: "Phaedra",
  },
  {
    id: "Conn",
    first_name: "Conn",
  },
];

class SetGoal extends React.Component {
  state = {
    value: "",
    activeTab: "1",
    modal: false,
    goalName: "",
    url: "",
    selectValue: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("goalName", this.state.goalName);
    formData.append("value", this.state.value);
    formData.append("url", this.state.url);
    formData.append("selectValue", this.state.selectValue);
    console.log("goalName", this.state.goalName);
    console.log("value", this.state.value);
    console.log("url", this.state.url);
    console.log("selectValue", this.state.selectValue);
    // console.log("selectValue", this.state.selectValue);
    // if (this.state.goalName.length > 0) {
    //   this.setState({ isValid: true });
    // } else if (this.state.goalName.length === 0) {
    //   this.setState({ isValid: false });
    // }
    axios
      .post("http://13.127.168.84:3000/user/create_goal", formData)
      .then((res) => {
        console.log("res", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  handleChange = (e) => {
    console.log(e.value);
    // this.setState({ selectValue: e.target.value });
  };

  componentDidMount() {}
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            <div className="text-right w-100">
              <Button color="primary" onClick={this.toggleModal}>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  centered
                >
                  <ModalHeader toggle={this.toggleModals}>
                    Create your goal
                  </ModalHeader>
                  <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col lg="12" md="12" sm="12">
                          <FormGroup>
                            <Label for="Category">Goal Category*</Label>
                            <Select
                              value={this.state.selectValue}
                              onChange={this.handleChange}
                              className="React customselect"
                              // classNamePrefix="select"
                              // defaultValue={category[0]}
                              name="category"
                              options={category}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12" md="12" sm="12" className="mb-2">
                          <FormGroup>
                            <Label for="goalName">Name your Goal*</Label>
                            <Input
                              type="text"
                              required
                              placeholder="Ex:signed up for basic plan"
                              onChange={(e) =>
                                this.setState({
                                  goalName: e.target.value,
                                })
                              }
                              value={this.state.goalName}
                              id="goalName"
                              name="goalName"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12" md="12" sm="12" className="mb-2">
                          <Label for="firstName">Set conversion value</Label>
                          <InputMask
                            onChange={(e) =>
                              this.setState({
                                value: e.target.value,
                              })
                            }
                            className="form-control"
                            mask="$9999"
                            placeholder="100"
                          />
                        </Col>

                        <Col md="12" sm="12" className="mb-2">
                          <FormGroup>
                            <Label for="url">Set goal completion URL*</Label>
                            <Input
                              type="text"
                              required
                              placeholder="URL"
                              onChange={(e) =>
                                this.setState({
                                  url: e.target.value,
                                })
                              }
                              value={this.state.url}
                              id="url"
                              name="url"
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <div className="add-task">
                            <Button.Ripple
                              block
                              className="btn-block my-1"
                              color="primary"
                              // onClick={() => {
                              //   this.props.addTask("open");
                              //   this.props.mainSidebar(false);
                              // }}
                            >
                              Create Goal
                            </Button.Ripple>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </ModalBody>
                </Modal>
                Create Goal
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <DataTable
              className="react-dataTable"
              pagination
              selectableRows
              paginationPerPage={7}
              sortIcon={<ChevronDown size={10} />}
              data={data}
              columns={columns}
              noHeader
            />
          </CardBody>
        </Card>
      </>
    );
  }
}

export default SetGoal;
