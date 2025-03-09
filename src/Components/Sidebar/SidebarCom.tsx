import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaUsers } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { IoTriangleOutline } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";


interface SidebarProps {
  openSideBar: boolean;
}
const SidebarCom: React.FC<SidebarProps> = ({ openSideBar }) => {
  return (
    <>
      <Sidebar collapsed={openSideBar}>
        <Menu>
          <MenuItem></MenuItem>
          <MenuItem>
            <Link
              to="/store"
              className="text-decoration-none"
            >
              <FaStoreAlt /> Store
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/sku"
              className="text-decoration-none"
            >
              <IoTriangleOutline /> SKU
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/planning"
              className="text-decoration-none"
            >
              <FcPlanner /> Planning
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/charts"
              className="text-decoration-none"
            >
              <FaChartSimple /> Charts
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SidebarCom;
