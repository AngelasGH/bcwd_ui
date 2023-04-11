import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/esm/Button";

const Layout = () => {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><strong>BCWD 1974</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <NavDropdown title="News & Advisories" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to='/bcwdnews'>BCWD News</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/serviceadvisories'>Service Advisories</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/waterqualityresult'>Water Quality Result</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/donorupdates'>Donor Updates</Link></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Bills & Payments" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to='/billspaymentpartners'>Bills Payment Partners</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/billcalculator'>Bill Calculator</Link></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Company" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to='/aboutus'>About Us</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/bidding'>Bidding</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/transparency'>Transparency</Link></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to='/contactus'>Contact Us</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/faqs'>Faqs</Link></NavDropdown.Item>
                            </NavDropdown>

                            <Button variant="primary">My Water Bill</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet/>
        </>
    );
}

export default Layout;