import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function SiteNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>GQL-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {" "}
            <Link className="nav-item nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-item nav-link" to={"/products/"}>
              Products
            </Link>
            <NavDropdown title="My Account" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to={"/my-account/"}>My Account</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/cart/"}>Cart</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/login/"}>Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/sign-up/"}>Sign Up</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Link to={"/cart/"}>
            <FaShoppingCart className="nav-icon" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
