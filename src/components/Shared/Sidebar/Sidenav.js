import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import logo from "../../../icons/logo2.png";
import { useEffect } from "react";
import { UserContext } from "./../../../App";

function Navbar() {
  const [loggedInUser] = useContext(UserContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://aqueous-wave-83012.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidenav">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div
            className="ml-auto text-white px-5 mx-5"
            style={{ fontFamily: "'Cinzel Decorative', cursive" }}
          >
            <img src={logo} alt="Wisdom law" width="50" height="40" />
            WISEDOM <span> LAW</span>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items fw-bold" onClick={showSidebar}>
            <li className="sidenav-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {!isAdmin && (
              <>
                <li className="nav-text">
                  <Link to="/">
                    <AiIcons.AiFillHome />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/appointmentList">
                    <FaIcons.FaRegListAlt />
                    <span>Appointment List</span>
                  </Link>
                </li>
                <li className="nav-text border-bottom border-secondary border-1 mb-3">
                  <Link to="/addReview">
                    <FaIcons.FaCommentAlt />
                    <span>Add Review</span>
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="nav-text">
                  <Link to="/">
                    <AiIcons.AiFillHome />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/appointmentList">
                    <FaIcons.FaRegListAlt />
                    <span>Appointment List</span>
                  </Link>
                </li>
                <li className="nav-text border-bottom border-secondary border-1 mb-3">
                  <Link to="/addReview">
                    <FaIcons.FaCommentAlt />
                    <span>Add Review</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/addService">
                    <FaIcons.FaPlusSquare />
                    <span>Add Service</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/orderList">
                    <FaIcons.FaListAlt />
                    <span>Order List</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/makeAdmin">
                    <FaIcons.FaUserEdit />
                    <span>Make Admin</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/manageService">
                    <IoIcons.IoIosPaper />
                    <span>Manage Service</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
