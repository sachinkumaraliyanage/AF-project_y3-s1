import React, { Component } from 'react';
import sliiticon from '../img/logo/SLIIT.png';
// import './App.css';
import { Card} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className="fo" >
                <Card className="text-center" bg="secondary" text="white">

                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>&copy; {new Date().getFullYear()} Copyright: Team Alpha</Card.Footer>
                </Card>
            </div>
        );
    }


}


