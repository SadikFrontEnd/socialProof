import React from "react";
import { Archive, FileText, MoreVertical, PenTool, Trash } from "react-feather";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

// ** Table Zero Config Column

export const myFormData = [
  {
    name: "Form Id",
    sortable: true,
    selector: (row) => row.formId,
  },
  {
    name: "Created Date",
    sortable: true,
    selector: (row) => row.createDate,
    minWidth: "150px",
  },
  {
    name: "Document Name",
    sortable: true,
    selector: (row) => row.docName,
    minWidth: "200px",
  },
  {
    name: "Access",
    sortable: true,
    selector: (row) => row.access,
    minWidth: "100px",
  },
  {
    name: "View",
    sortable: true,
    center: true,
    minWidth: "100px",
    cell: (row) => (
      <>
        <Button className="btn btn-sm text-primary" outline>
          View
        </Button>
      </>
    ),
  },
  {
    name: "Action",
    sortable: true,
    selector: (row) => row,
    cell: () => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pe-" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <FileText size={15} />
                <span className="align-middle ms-50">Details</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <Archive size={15} />
                <span className="align-middle ms-50">Archive</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <Trash size={15} />
                <span className="align-middle ms-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      );
    },
  },
];

export const positionData = [
  {
    name: "CAMPAIGN NAME",
    sortable: true,
    selector: (row) => row.rolename,
  },
  {
    name: "STATUS",
    sortable: true,
    selector: (row) => row.Status,
  },
  {
    name: "POSITION",
    sortable: true,
    center: true,
    selector: (row) => row.POSITION,
  },
  {
    name: "PHONE",
    sortable: true,
    center: true,
    selector: (row) => row.PHONE,
  },
  {
    name: "ONBOARD",
    sortable: true,
    center: true,
    selector: (row) => row.ONBOARD,
  },
  {
    name: "RATING",
    sortable: true,
    center: true,
    selector: (row) => row.RATING,
  },
  {
    name: "NOTE",
    sortable: true,
    center: true,
    selector: (row) => row.NOTE,
  },
  {
    name: "TAG",
    sortable: true,
    center: true,
    selector: (row) => row.TAG,
  },
  {
    name: "ACTION",
    sortable: true,
    selector: (row) => row,
    cell: () => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pe-" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <PenTool size={15} />
                Edit
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <Trash size={15} />
                <span className="align-middle ms-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      );
    },
  },
];

export const data1 = [
  {
    id: 1,
    rolename: "Sveltose",
    Status: "Active",
    POSITION: "owner",
    PHONE: "+1123456789",
    ONBOARD: "82%",
    RATING: "2",
    NOTE: "icon",
    TAG: "-",
  },
  {
    id: 2,
    rolename: "Sveltose",
    Status: "Active",
    POSITION: "owner",
    PHONE: "+1123456789",
    ONBOARD: "82%",
    RATING: "2",
    NOTE: "icon",
    TAG: "-",
  },
  {
    id: 3,
    rolename: "Sveltose",
    Status: "Active",
    POSITION: "owner",
    PHONE: "+1123456789",
    ONBOARD: "82%",
    RATING: "2",
    NOTE: "icon",
    TAG: "-",
  },
  {
    id: 4,
    rolename: "Sveltose",
    Status: "Active",
    POSITION: "owner",
    PHONE: "+1123456789",
    ONBOARD: "82%",
    RATING: "2",
    NOTE: "icon",
    TAG: "-",
  },
];

export const data = [
  {
    id: 1,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Driving licence ",
    access: "admin",
    type: "none",
  },
  {
    id: 2,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 3,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Driving licence ",
    access: "admin",
    type: "none",
  },
  {
    id: 4,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Driving licence ",
    access: "admin",
    type: "none",
  },
  {
    id: 5,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 6,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 7,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 8,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 9,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 10,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 11,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 12,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 13,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 14,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 15,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Passport ",
    access: "admin",
    type: "none",
  },
  {
    id: 16,
    formId: "167-161211",
    createDate: "Jan 1, 2022",
    docName: "Driving licence ",
    access: "admin",
    type: "none",
  },
];
