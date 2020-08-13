import React, { useState } from "react";
import Nav from '../Nav/Nav';
// import "./Layout.scss";

const Layout = (props) => {
  const [hideChildren, setHideChildren] = useState(false);
  return (
    <div id="layout-div">
      {hideChildren ? null : props.children}
      <Nav setHideChildren={setHideChildren} />
    </div>
  );
};

export default Layout;
