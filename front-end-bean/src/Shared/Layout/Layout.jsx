import React, { useState } from "react";
import Nav from '../Nav/Nav';
import "./Layout.scss";

const Layout = (props) => {
  const [hideChildren, setHideChildren] = useState(false);

  console.log('hide children', hideChildren)
  return (
    <div>
      {/* {hideChildren ? null : props.children} */}
      <div id={hideChildren ? 'hide-children' : null}>{props.children}</div>
      <Nav setHideChildren={setHideChildren} />
    </div>
  );
};

export default Layout;
