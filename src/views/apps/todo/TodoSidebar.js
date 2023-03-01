import React from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Modal,
  Form,
  ModalHeader,
  ModalBody,
  InputGroup,
  Input,
  ModalFooter,
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { X, Layers, Star, Info, Check, Trash, User } from "react-feather";
import { connect } from "react-redux";
import { changeFilter } from "../../../redux/actions/todo/index";
import { history } from "../../../history";
class TodoSidebar extends React.Component {
  state = {
    modal: false,
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.campaignName.length > 0) {
      history.push("/apps/editcampaigns");
      this.setState({ isValid: true });
    } else if (this.state.campaignName.length === 0) {
      this.setState({ isValid: false });
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* {console.log("getting props", this.props.routerProps.location)} */}
        <span
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={15} />
        </span>
        <div className="todo-app-menu">
          <div className="add-task">
            <Button.Ripple
              block
              color="primary"
              className="btn-block my-1"
              onClick={this.toggleModal}
            >
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggleModal}
                className="modal-dialog-centered"
              >
                <Form onSubmit={this.handleSubmit}>
                  <ModalHeader toggle={this.toggleModal}>
                    Build & launch a new campaign
                  </ModalHeader>
                  <ModalBody>
                    <InputGroup>
                      <Input
                        type="text"
                        required
                        placeholder="Campaign Name"
                        onChange={(e) =>
                          this.setState({
                            campaignName: e.target.value,
                          })
                        }
                        value={this.state.campaignName}
                        id="campaignName"
                        name="campaignName"
                        valid={this.state.isValid === true}
                        invalid={this.state.isValid === false}
                        alt="text"
                      />
                    </InputGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="btn-sm"
                      color="primary"
                      onClick={this.handleSubmit}
                    >
                      Next
                    </Button>
                    <Button
                      className="btn-secondary btn-sm"
                      onClick={this.toggleModal}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Form>
              </Modal>
              Create Campaign
            </Button.Ripple>
          </div>
          <PerfectScrollbar
            className="sidebar-menu-list"
            options={{
              wheelPropagation: false,
            }}
          >
            <ListGroup className="font-medium-1">
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("starred");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/starred"
                    ? true
                    : false
                }
              >
                {/* <Star size={22} /> */}
                <span className="align-middle ml-1">Campaigns</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("completed");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/completed"
                    ? true
                    : false
                }
              >
                {/* <Check size={22} /> */}
                <span className="align-middle ml-1">Statistics</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("trashed");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/trashed"
                    ? true
                    : false
                }
              >
                {/* <User size={22} /> */}
                <span className="align-middle ml-1">Help Center</span>
              </ListGroupItem>
            </ListGroup>
            <hr />
          </PerfectScrollbar>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { changeFilter })(TodoSidebar);
