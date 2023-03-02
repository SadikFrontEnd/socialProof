import React from "react";
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
  CustomInput,
  CardTitle,
} from "reactstrap";
import { ChevronDown } from "react-feather";
import axios from "axios";
import InputMask from "react-input-mask";
import Select from "react-select";
// import "../../../../assets/scss/pages/set-goal.scss";
import DataTable from "react-data-table-component";
const category = [
  { id: "1", value: "Lead", label: "Lead" },
  { id: "2", value: "Purchase", label: "Purchase" },
  { id: "3", value: "Schedule", label: "Schedule" },
  { id: "4", value: "Subscribe", label: "Subscribe" },
  { id: "5", value: "Start Trial", label: "Start Trial" },
  { id: "6", value: "View Content", label: "View Content" },
  { id: "7", value: "Complete Registration", label: "Complete Registration" },
];

const data = [
  {
    id: "Alyss",
    url: "Alyss",
  },
  {
    id: "Shep",
    url: "Shep",
  },
  {
    id: "Gasper",
    url: "Gasper",
  },
  {
    id: "Phaedra",
    url: "Phaedra",
  },
  {
    id: "Conn",
    url: "Conn",
  },
];
const columns = [
  {
    name: "URL",
    selector: "url",
    sortable: true,
  },
];

class DisplaySite extends React.Component {
  state = {
    value: "",
    activeTab: "1",
    modal: false,
    goalName: "",
    url: "",
    selectValue: "",
    getData: [],
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
    this.setState({ selectValue: e.value });
  };

  async componentDidMount() {
    await axios
      .get("http://13.127.168.84:3000/user/get_Goal")
      .then((resp) => {
        this.setState({ getData: resp.data.data });
        console.log("ress", resp.data.data);
      })
      .catch((err) => {
        console.log("object", err);
      });
  }

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
                    Create your Url
                  </ModalHeader>
                  <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col md="12" sm="12" className="mb-2">
                          <FormGroup>
                            <Label for="url">Add Display Url*</Label>
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
                              Add Display Url
                            </Button.Ripple>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </ModalBody>
                </Modal>
                Add Display Url
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
              // data={this.state.getData}
              columns={columns}
              noHeader
            />
          </CardBody>
        </Card>
      </>
    );
  }
}

export default DisplaySite;

// import React from "react";
// import {
//   Media,
//   Row,
//   Col,
//   Button,
//   Form,
//   Input,
//   Label,
//   FormGroup,
//   Table,
//   Card,
//   CardBody,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";
// import "../../../assets/scss/pages/edit-campaign.scss";
// class DisplaySite extends React.Component {
//   state = {
//     modal: false,
//     url: "",
//   };
//   toggleModal = () => {
//     this.setState((prevState) => ({
//       modal: !prevState.modal,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <Row>
//           <Col lg="12" sm="12">
//             <h1> Where would you like to display this campaign?</h1>
//             <Card>
//               <h2 className="headAuto">Add your display URL's</h2>

//               <CardBody className="pt-1">
//                 <h3>
//                   Choose one or more pages where you would like to display
//                   notifications.
//                 </h3>
//                 <Form onSubmit={this.handleSubmit}>
//                   <Row>
//                     <Col md="10" sm="10" className="mb-2">
//                       <FormGroup>
//                         <Input
//                           type="text"
//                           required
//                           placeholder="URL"
//                           onChange={(e) =>
//                             this.setState({
//                               campaignName: e.target.value,
//                             })
//                           }
//                           value={this.state.campaignName}
//                           id="campaignName"
//                           name="campaignName"
//                           valid={this.state.isValid === true}
//                           invalid={this.state.isValid === false}
//                         />
//                         {this.state.isValid ? (
//                           <span className="valid-tooltip">Looks Good!</span>
//                         ) : this.state.isValid === false ? (
//                           <span className="invalid-tooltip">
//                             Please enter a Campaign Name
//                           </span>
//                         ) : (
//                           ""
//                         )}
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                 </Form>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </>
//     );
//   }
// }
// export default DisplaySite;.
