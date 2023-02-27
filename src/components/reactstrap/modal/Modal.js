import React from "react";
import { Row, Col } from "reactstrap";
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
class Modals extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Modal"
          breadCrumbParent="Components"
          breadCrumbActive="Modal"
        />
      </React.Fragment>
    );
  }
}
export default Modals;
