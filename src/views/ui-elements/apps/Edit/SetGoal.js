import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { ChevronDown } from "react-feather";
import axios from "axios";
import Select from "react-select";
import "../../../../assets/scss/pages/set-goal.scss";
import DataTable from "react-data-table-component";
const category = [
  { value: "Lead", label: "lead" },
  { value: "Purchase", label: "purchase" },
  { value: "Schedule", label: "schedule" },
  { value: "Subscribe", label: "subscribe" },
  { value: "Start Trial", label: "start trial" },
  { value: "View Content", label: "view content" },
  { value: "Complete Registration", label: "complete registration" },
];

const columns = [
  {
    name: "GOALS",
    selector: "category_goal",
    sortable: true,
  },
  {
    name: "CONVERTIONS",
    selector: "convertion",
    sortable: true,
  },
  {
    name: "VALUE",
    selector: "value",
    sortable: true,
  },
  {
    name: "URL",
    selector: "url",
    sortable: true,
  },
];
const data = [
  {
    id: "Alyss",
    convertion: "Alyss",
  },
  {
    id: "Shep",
    convertion: "Shep",
  },
  {
    id: "Gasper",
    convertion: "Gasper",
  },
  {
    id: "Phaedra",
    convertion: "Phaedra",
  },
  {
    id: "Conn",
    convertion: "Conn",
  },
];

const SetGoal = ({}) => {
  const [isCreateTicketModalOpen, setIsCreateTicketModalOpen] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [conversionValue, setConversionValue] = useState("");
  const [url, setUrl] = useState("");
  const [selectValue, setSelectValue] = useState("Schedule");
  const [getData, setGetData] = useState([]);

  const handleCreateTicketClick = () => {
    setIsCreateTicketModalOpen(true);
  };

  const formData = {
    goalName,
    conversionValue,
    url,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCreateTicketModalOpen(isCreateTicketModalOpen);
    console.log("Value", conversionValue);
    console.log("url", url);
    axios
      .post("http://13.127.168.84:3000/user/create_goal", formData)
      .then((res) => {
        console.log("res", res.data.data);
        // setGetData(res.data.data);
        setIsCreateTicketModalOpen(isCreateTicketModalOpen);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   {
  //     axios
  //       .get("http://13.127.168.84:3000/user/get_Goal")
  //       .then((resp) => {
  //         getData(resp.data.data);
  //         console.log("ress", resp.data.data);
  //       })
  //       .catch((err) => {
  //         console.log("object", err);
  //       });
  //   }
  // }, []);

  return (
    <>
      <Card>
        <CardHeader>
          <div className="text-right w-100">
            <Button color="primary" onClick={handleCreateTicketClick}>
              <Modal
                isOpen={isCreateTicketModalOpen}
                toggle={() =>
                  setIsCreateTicketModalOpen(!isCreateTicketModalOpen)
                }
                centered
              >
                <ModalHeader
                  toggle={() =>
                    setIsCreateTicketModalOpen(!isCreateTicketModalOpen)
                  }
                >
                  Create your goal
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg="12" md="12" sm="12">
                        <FormGroup>
                          <Label for="Category">Goal Category*</Label>
                          <Select
                            id="task-assignee"
                            // className="React customselect"
                            className="react-select"
                            classNamePrefix="select"
                            isClearable={false}
                            options={category}
                            // value={selectValue}
                            // defaultValue={category[0]}
                            onChange={(data) => {
                              setSelectValue(data.value);
                              console.log(data.value);
                            }}
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
                            onChange={(e) => {
                              setGoalName(e.target.value);
                              console.log(e.target.value);
                            }}
                            value={goalName}
                            id="goalName"
                            name="goalName"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12" md="12" sm="12" className="mb-2">
                        <Label for="firstName">Set conversion value</Label>
                        <InputGroup>
                          <InputGroupText>$</InputGroupText>

                          <Input
                            onChange={(e) => {
                              setConversionValue(e.target.value);
                              console.log(e.target.value);
                            }}
                            className="form-control"
                            mask="$9999"
                            placeholder="100"
                            value={conversionValue}
                          />
                        </InputGroup>
                      </Col>

                      <Col md="12" sm="12" className="mb-2">
                        <FormGroup>
                          <Label for="url">Set goal completion URL*</Label>
                          <Input
                            type="text"
                            required
                            placeholder="URL"
                            onChange={(e) => {
                              setUrl(e.target.value);
                              console.log(e.target.value);
                            }}
                            value={url}
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
                            onClick={() => {
                              setIsCreateTicketModalOpen(
                                setIsCreateTicketModalOpen
                              );
                            }}
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
            // data={getData}
            columns={columns}
            noHeader
          />
        </CardBody>
      </Card>
    </>
  );
};

// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Row,
//   Col,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   CustomInput,
//   CardTitle,
// } from "reactstrap";
// import { ChevronDown } from "react-feather";
// import axios from "axios";
// import InputMask from "react-input-mask";
// import Select from "react-select";
// import "../../../../assets/scss/pages/set-goal.scss";
// import DataTable from "react-data-table-component";
// const category = [
//   { value: "Lead", label: "lead" },
//   { value: "Purchase", label: "purchase" },
//   { value: "Schedule", label: "schedule" },
//   { value: "Subscribe", label: "subscribe" },
//   { value: "Start Trial", label: "start trial" },
//   { value: "View Content", label: "view content" },
//   { value: "Complete Registration", label: "complete registration" },
// ];

// const columns = [
//   {
//     name: "GOALS",
//     selector: "category_goal",
//     sortable: true,
//   },
//   {
//     name: "CONVERTIONS",
//     selector: "convertion",
//     sortable: true,
//   },
//   {
//     name: "VALUE",
//     selector: "value",
//     sortable: true,
//   },
//   {
//     name: "URL",
//     selector: "url",
//     sortable: true,
//   },
// ];
// const data = [
//   {
//     id: "Alyss",
//     convertion: "Alyss",
//   },
//   {
//     id: "Shep",
//     convertion: "Shep",
//   },
//   {
//     id: "Gasper",
//     convertion: "Gasper",
//   },
//   {
//     id: "Phaedra",
//     convertion: "Phaedra",
//   },
//   {
//     id: "Conn",
//     convertion: "Conn",
//   },
// ];

// class SetGoal extends React.Component {
//   state = {
//     value: "",
//     activeTab: "1",
//     modal: false,
//     goalName: "",
//     url: "",
//     selectValue: "Schedule",
//     getData: [],
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("goalName", this.state.goalName);
//     formData.append("value", this.state.value);
//     formData.append("url", this.state.url);
//     formData.append("selectValue", this.state.selectValue);
//     console.log("goalName", this.state.goalName);
//     console.log("value", this.state.value);
//     console.log("url", this.state.url);
//     console.log("selectValue", this.state.selectValue);
//     // if (this.state.goalName.length > 0) {
//     //   this.setState({ isValid: true });
//     // } else if (this.state.goalName.length === 0) {
//     //   this.setState({ isValid: false });
//     // }
//     axios
//       .post("http://13.127.168.84:3000/user/create_goal", formData)
//       .then((res) => {
//         console.log("res", res.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   toggleModal = () => {
//     this.setState((prevState) => ({
//       modal: !prevState.modal,
//     }));
//   };
//   handleChange = (e) => {
//     console.log(e);
//     // this.setState({ selectValue: e.value });
//   };

//   async componentDidMount() {
//     await axios
//       .get("http://13.127.168.84:3000/user/get_Goal")
//       .then((resp) => {
//         this.setState({ getData: resp.data.data });
//         console.log("ress", resp.data.data);
//       })
//       .catch((err) => {
//         console.log("object", err);
//       });
//   }

//   render() {
//     return (
//       <>
//         <Card>
//           <CardHeader>
//             <div className="text-right w-100">
//               <Button color="primary" onClick={this.toggleModal}>
//                 <Modal
//                   isOpen={this.state.modal}
//                   toggle={this.toggleModal}
//                   centered
//                 >
//                   <ModalHeader toggle={this.toggleModals}>
//                     Create your goal
//                   </ModalHeader>
//                   <ModalBody>
//                     <Form onSubmit={this.handleSubmit}>
//                       <Row>
//                         <Col lg="12" md="12" sm="12">
//                           <FormGroup>
//                             <Label for="Category">Goal Category*</Label>
//                             <Select
//                               id="task-assignee"
//                               // className="React customselect"
//                               className="react-select"
//                               classNamePrefix="select"
//                               isClearable={false}
//                               options={category}
//                               value={this.state.selectValue}
//                               // onChange={this.handleChange}
//                               // defaultValue={category[0]}
//                               onChange={(data) => {
//                                 // this.setState.selectValue(data);
//                                 console.log("object", data);
//                               }}
//                               // name="category"
//                             />
//                           </FormGroup>
//                         </Col>

//                         <Col lg="12" md="12" sm="12" className="mb-2">
//                           <FormGroup>
//                             <Label for="goalName">Name your Goal*</Label>
//                             <Input
//                               type="text"
//                               required
//                               placeholder="Ex:signed up for basic plan"
//                               onChange={(e) =>
//                                 this.setState({
//                                   goalName: e.target.value,
//                                 })
//                               }
//                               value={this.state.goalName}
//                               id="goalName"
//                               name="goalName"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col lg="12" md="12" sm="12" className="mb-2">
//                           <Label for="firstName">Set conversion value</Label>
//                           <InputMask
//                             onChange={(e) =>
//                               this.setState({
//                                 value: e.target.value,
//                               })
//                             }
//                             className="form-control"
//                             mask="$9999"
//                             placeholder="100"
//                           />
//                         </Col>

//                         <Col md="12" sm="12" className="mb-2">
//                           <FormGroup>
//                             <Label for="url">Set goal completion URL*</Label>
//                             <Input
//                               type="text"
//                               required
//                               placeholder="URL"
//                               onChange={(e) =>
//                                 this.setState({
//                                   url: e.target.value,
//                                 })
//                               }
//                               value={this.state.url}
//                               id="url"
//                               name="url"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col>
//                           <div className="add-task">
//                             <Button.Ripple
//                               block
//                               className="btn-block my-1"
//                               color="primary"
//                               // onClick={() => {
//                               //   this.props.addTask("open");
//                               //   this.props.mainSidebar(false);
//                               // }}
//                             >
//                               Create Goal
//                             </Button.Ripple>
//                           </div>
//                         </Col>
//                       </Row>
//                     </Form>
//                   </ModalBody>
//                 </Modal>
//                 Create Goal
//               </Button>
//             </div>
//           </CardHeader>
//           <CardBody>
//             <DataTable
//               className="react-dataTable"
//               pagination
//               selectableRows
//               paginationPerPage={7}
//               sortIcon={<ChevronDown size={10} />}
//               data={data}
//               // data={this.state.getData}
//               columns={columns}
//               noHeader
//             />
//           </CardBody>
//         </Card>
//       </>
//     );
//   }
// }

export default SetGoal;
