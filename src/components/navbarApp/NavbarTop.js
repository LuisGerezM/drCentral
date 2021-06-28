import {
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import userImage from "../../assets/img/userImg.png";
import logo from "../../assets/img/drCentral-removebg.png";
import "./styleNavbarTop.css";
import { useContext } from "react";

import { logOut } from "../../servers/firebase/Firebase";
import { AuthDoctorContext } from "../../contexts/doctorContext/AuthDoctorProvider";

const NavbarTop = () => {
  const { doctor } = useContext(AuthDoctorContext);

  const navDropdownImage = (
    <Image
      src={userImage}
      style={{ width: "70px", height: "50px", borderRadius: "50%" }}
    />
  );

  return (
    <>
      <Navbar
        className=" mx-0 decoration-navbar-top"
        variant="dark"
        expand="lg"
        style={{ backGroundColor: "hsl(211, 100%, 50%)" }}
      >
        <Navbar className="col-md-4 pl-md-5">
          <Row>
            <Col className="px-md-1 my-md-auto logoNav cursor">
              <Image
                src={logo}
                style={{
                  width: "70px",
                  height: "65px",
                  borderRadius: "50%",
                }}
              />
            </Col>
            <Col className="my-md-auto pl-md-2">
              <strong className="tittle-nav cursor">DrCentral</strong>
            </Col>
          </Row>
        </Navbar>

        {doctor && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="col-md-12 my-md-auto ml-md-5 justify-content-center">
                <Nav className="welcome col-md-9 my-md-auto mt-3 ml-md-5 justify-content-md-start navbar-nav text-center tittle-nav cursor">
                  {" "}
                  Bienvenido{" "}
                  {doctor?.user_name ? doctor.user_name : "Cargado..."}
                </Nav>
                <NavDropdown
                  title={navDropdownImage}
                  className="col-md-2 ml-3 my-auto imagen text-center nav-item dropdown"
                  variant="outline-primary"
                >
                  <NavDropdown.Item>
                    <Button
                      className="ml-3 ml-md-0 my-md-3"
                      variant="outline-primary"
                      onClick={logOut}
                    >
                      Cerrar sesión
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
    </>
  );
};

export default NavbarTop;
