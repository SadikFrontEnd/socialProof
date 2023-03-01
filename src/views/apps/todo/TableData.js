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

export const data = [
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
