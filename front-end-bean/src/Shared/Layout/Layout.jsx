import React, { useState } from "react";
import Nav from '../Nav/Nav';
// import "./Layout.scss";

const Layout = (props) => {
//   const [hideProps, setHideProps] = useState(false);
  return (
    <div id="layout-div">
      {/* <Nav setHideProps={setHideProps} /> */}
      <Nav />
      {/* <div id={hideProps ? "hide-props" : null}>{props.children}</div> */}
      {props.children}
    </div>
  );
};

export default Layout;
