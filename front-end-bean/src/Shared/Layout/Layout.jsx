import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./Layout.scss";

const Layout = (props) => {
  const [hideChildren, setHideChildren] = useState(false);

  return (
    <div>
      <div id={hideChildren ? "hide-children" : null}>{props.children}</div>
      <Nav setHideChildren={setHideChildren} />
    </div>
  );
};

export default Layout;
