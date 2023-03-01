import React from "react";
import {
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  InputGroup,
} from "reactstrap";
import DataTable from "react-data-table-component";
import "../../../assets/scss/pages/app-email.scss";
import "../../../assets/scss/pages/campaignTable.scss";
import { Menu, Search, ChevronDown } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { history } from "../../../history";
import { positionData, data } from "./TableData";
import {
  getTodos,
  completeTask,
  starTask,
  importantTask,
  trashTask,
  searchTask,
} from "../../../redux/actions/todo/index";
import "../../../assets/scss/pages/campaign.scss";

class TodoList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.app.todo.routeParam !== state.currentLocation) {
      return {
        todos: props.app.todo.todos,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
  state = {
    todos: [],
    handleUpdateTask: null,
    currentLocation: this.props.routerProps.location.pathname,
    value: "",
    activeTab: "1",
    modal: false,
    campaignName: "",
  };
  async componentDidMount() {
    await this.props.getTodos(this.props.routerProps.match.params);
    this.setState({
      todos: this.props.app.todo.todos,
      handleUpdateTask: this.props.handleUpdateTask,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.campaignName.length > 0) {
      history.push("/apps/editcampaigns");
      this.setState({ isValid: true });
    } else if (this.state.campaignName.length === 0) {
      this.setState({ isValid: false });
    }
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.searchTask(e.target.value);
  };

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    const { todos, handleUpdateTask, value } = this.state;
    let routerFilter = this.props.routerProps.match.params.filter;
    let todosArr = value.length ? this.props.app.todo.filteredTodos : todos;
    let renderTodos =
      todosArr.length > 0 ? (
        todosArr.map((todo, i) => {
          return (
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} centered>
              <ModalHeader toggle={this.toggleModal}>
                Create Position
              </ModalHeader>
              <ModalBody>
                <InputGroup>
                  <Input
                    type="text"
                    alt="text"
                    placeholder="create position..."
                  />
                </InputGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary">Create</Button>
              </ModalFooter>
            </Modal>
          );
        })
      ) : (
        <p className="p-1 text-center mt-2 font-medium-3 text-bold-500">
          No tasks at this time
        </p>
      );

    return (
      <div className="content-right">
        <div className="todo-app-area">
          <div className="todo-app-list-wrapper">
            <div className="todo-app-list">
              <div className="app-fixed-search">
                <div
                  className="sidebar-toggle d-inline-block d-lg-none"
                  onClick={() => this.props.mainSidebar(true)}
                >
                  <Menu size={24} />
                </div>
                <FormGroup className="position-relative has-icon-left m-0 d-inline-block d-lg-block">
                  <Input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => this.handleOnChange(e)}
                    value={value}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </div>
              <PerfectScrollbar
                className="todo-task-list"
                options={{
                  wheelPropagation: false,
                }}
              >
                {/* <Row className="todo-task-list-wrapper mt-2">{renderTodos}</Row> */}
                {/* <ul className="todo-task-list-wrapper">{renderTodos}</ul> */}
                <div className="react-dataTable">
                  <DataTable
                    className="react-dataTable"
                    noHeader
                    pagination
                    selectableRows
                    columns={positionData}
                    paginationPerPage={7}
                    sortIcon={<ChevronDown size={10} />}
                    data={data}
                  />
                </div>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.todoApp,
  };
};
export default connect(mapStateToProps, {
  getTodos,
  completeTask,
  starTask,
  importantTask,
  trashTask,
  searchTask,
})(TodoList);
