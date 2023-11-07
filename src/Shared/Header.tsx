import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import classes from "./header.module.css";
import logo from "./../Assests/Images/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import user from "../Assests/Icons/boy.png";
import { BsList } from "react-icons/bs";

const Headerbar = () => {
  let { pathname } = useLocation();

  const applycolor = (name: string) => {
    if (pathname.includes(name)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Navbar expand="lg" className={classes.headernav} sticky="top">
      <div className={classes.main_container}>
        {/* <Navbar.Brand href="#">
          <img src={logo} alt="logo" className={classes.logoimg} />
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={classes.header_toggle}
        >
          <BsList />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" className={classes.navblocks}>
          <Nav className={classes.navbaritems} navbarScroll>
            <Nav.Link
              as={Link}
              to="/dashboard"
              className={
                applycolor("dashboard")
                  ? classes.navactivelinks
                  : classes.navlinks
              }
            >
              Dashboard
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/users"
              className={
                applycolor("users") ? classes.navactivelinks : classes.navlinks
              }
            >
              Users
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/product"
              className={
                applycolor("product")
                  ? classes.navactivelinks
                  : classes.navlinks
              }
            >
              Product
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/location"
              className={
                applycolor("location")
                  ? classes.navactivelinks
                  : classes.navlinks
              }
            >
              Location
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/chart"
              className={
                applycolor("chart") ? classes.navactivelinks : classes.navlinks
              }
            >
              Charts
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/forms"
              className={
                applycolor("forms") ? classes.navactivelinks : classes.navlinks
              }
            >
              Forms
            </Nav.Link>

            <NavDropdown
              title={<span className={classes.dropdownlink}>Lists</span>}
              id="navbarScrollingDropdown"
              className={classes.navdropdown}
            >
              <NavDropdown.Item as={Link} to="/dashboard">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dashboard">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/dashboard">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div>
            {/* <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link> */}
            <img src={user} alt="user" className={classes.logoimg} />
          </div>{" "}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Headerbar;
