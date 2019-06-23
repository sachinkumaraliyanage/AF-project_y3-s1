import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className="fo" >
                <Card className="text-center" bg="secondary" text="white">

                    <Card.Body>
                        <Card.Text>
                            This Student Instructor information system was design by 3rd Year 1st Semester Group WE_17.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>&copy; {new Date().getFullYear()} Copyright: Team Alpha</Card.Footer>
                </Card>
            </div>
        );
    }


}


