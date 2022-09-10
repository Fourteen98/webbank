import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './styles.css'

function TheNavBar() {
  return (
    <Navbar className="navbar" bg="light" expand="xxl">
      <Container className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">
            <img className="logo" src="https://assets.webbank.com/webbank-logo.svg" alt="logo"></img>
          </NavLink>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Personal" id="basic-nav-dropdown">

              <NavDropdown.Item href="/pages/personal/BrandPartners">
                <NavLink to="/pages/personal/BrandPartners">
                  Brand Partners
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink to="/pages/personal/DepositProducts"> Deposit Products </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Business Partner" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <NavLink to="/pages/business/BusinessBrandPartners">Brand Partners</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink to="/pages/business/AssetFinance">
                  Asset Finance
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <NavLink to="/pages/business/Commercial">
                  Commercial Insurance Premium Finance
                </NavLink>
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#link">
              <NavLink to="/pages/BecomePartner">Become A Partner</NavLink>
            </Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <NavLink to="/pages/about/AboutWebBank">About WebBank</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink to="/pages/about/Leadership">Leadership</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <NavLink to="/pages/about/Working">Working at WebBank</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <NavLink to="/pages/about/ContactUs">Contact Us</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <NavLink to="/pages/about/NewsRoom">News Room</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <NavLink to="/pages/about/NewsRoom">Financial Statement Link</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <NavLink to="/pages/about/Privacy">Privacy</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <NavLink to="/pages/about/BusinessAssociations">Business Associations and Memberships</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
      <div className="navbar-item">
        <div className="buttons"><a href="https://www.netteller.com/webbank" target="_blank"
                                    className="button is-primary"><strong>Online Banking</strong></a></div>
      </div>
    </Navbar>
  );
}

export default TheNavBar;
