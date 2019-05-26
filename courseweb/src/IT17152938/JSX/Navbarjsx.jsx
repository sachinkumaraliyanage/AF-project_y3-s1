import React, {Component} from 'react';
import sliiticon from '../img/logo/SLIIT.png';
import Login from "./Login";
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Navbarjsx extends Component {


    logoutFuntion(e) {
        e.preventDefault();
        localStorage.setItem("user", null);
        // console.log('The link was clicked.');
        //return <Redirect to='/index' />;
        window.location.href = "/"
    }



    render() {

        let result = localStorage.getItem("user");
        result = JSON.parse(result);
        // console.log(result);

        if (result == null || result == undefined) {
            return (
                <div className="Na">
                    <Navbar bg="light" variant="light" fixed="top">
                        <Navbar.Brand href="#home">
                            <img
                                width={150}
                                height={64}
                                className="d-inline-block align-top"
                                src={sliiticon}
                                alt="SLIIT ICON"/>

                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Login/>
                        <Link to="/register"> <Button variant="outline-primary">REGISTER</Button></Link>
                        {/*<Form inline>
                        <FormControl type="text" placeholder="User Name" className="mr-sm-2" />
                        <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                        <Button variant="outline-primary">LOGIN</Button>
                        <Link to="/register">  <Button variant="outline-primary">REGISTER</Button></Link>
                    </Form>*/}
                    </Navbar>
                </div>
            );
        } else if (result.types.value == 3) {
            // console.log("gty");
            // console.log();
            return (
                <div className="Na">
                    <Navbar bg="light" variant="light" fixed="top">
                        <Navbar.Brand href="#home">
                            <img
                                width={150}
                                height={64}
                                className="d-inline-block align-top"
                                src={sliiticon}
                                alt="SLIIT ICON"/>

                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="/register">Add User</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Link to="/edituser">
                            <div><h5><a>{result.firstName + ' ' + result.lastName + ' (' + result.types.label
                            + ')'}</a></h5></div>
                        </Link>
                        <Button variant="outline-primary" onClick={this.logoutFuntion}>LOG OUT</Button>

                    </Navbar>
                </div>
            );
        } else if (result.types.value == 2) {
            // console.log("gty");
            // console.log();
            return (
                <div className="Na">
                    <Navbar bg="light" variant="light" fixed="top">
                        <Navbar.Brand href="#home">
                            <img
                                width={150}
                                height={64}
                                className="d-inline-block align-top"
                                src={sliiticon}
                                alt="SLIIT ICON"/>

                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Link to="/edituser">
                            <div><h5><a>{result.firstName + ' ' + result.lastName + ' (' + result.types.label
                            + ')'}</a></h5></div>
                        </Link>
                        <Button variant="outline-primary" onClick={this.logoutFuntion}>LOG OUT</Button>

                    </Navbar>
                </div>
            );
        } else {
            // console.log("gty");
            // console.log();
            return (
                <div className="Na">
                    <Navbar bg="light" variant="light" fixed="top">
                        <Navbar.Brand href="#home">
                            <img
                                width={150}
                                height={64}
                                className="d-inline-block align-top"
                                src={sliiticon}
                                alt="SLIIT ICON"/>

                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Login/>
                        <Link to="/register"> <Button variant="outline-primary">REGISTER</Button></Link>

                    </Navbar>
                </div>
            );
        }


    }


}


