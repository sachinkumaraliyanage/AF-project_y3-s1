import React, { Component } from 'react';
import sliiticon from '../img/logo/SLIIT.png';
// import './App.css';
import { Button,Navbar,Nav ,Form,FormControl,NavDropdown} from 'react-bootstrap';

export default class Navbarjsx extends Component {
    render() {
        return (
            <div className="Na" >
                <Navbar bg="light" variant="light"  fixed="top">
                    <Navbar.Brand href="#home">
                        <img
                            width={150}
                            height={64}
                            className="d-inline-block align-top"
                            src={sliiticon}
                            alt="SLIIT ICON"/>

                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="User Name" className="mr-sm-2" />
                        <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                        <Button variant="outline-primary">LOGIN</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }


}


