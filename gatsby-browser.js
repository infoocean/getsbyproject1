import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

const MyCart = require("./src/pages/Store/Context");

const wrapPageElement = ({ element }) => {
  return <MyCart>{element}</MyCart>;
};

export default wrapPageElement;
