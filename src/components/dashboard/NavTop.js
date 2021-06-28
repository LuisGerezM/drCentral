import { Form, Navbar, Button, FormControl } from "react-bootstrap";

const NavTop = ({ name }) => {
  return (
    <Navbar
      className="characteristics-text decoration-nav-top pl-2"
      expand="lg"
    >
      <Navbar className="name-page col-md-8">{name}</Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-md-end justify-content-center"
        id="basic-navbar-nav"
      >
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 search"
          />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTop;
