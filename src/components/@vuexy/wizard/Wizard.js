import React from "react";
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb";
import { Row, Col } from "reactstrap";
class Wizard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Wizard"
          breadCrumbParent="Extra Components"
          breadCrumbActive="Wizard"
        />
      </React.Fragment>
    );
  }
}
export default Wizard;
