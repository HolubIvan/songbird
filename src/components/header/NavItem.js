import React from "react";

const NavItem = ({ name, activeList }) => {
  const classForList = `header__nav-item ${activeList}`;

  return <li className={classForList}>{name}</li>;
};

export default NavItem;
