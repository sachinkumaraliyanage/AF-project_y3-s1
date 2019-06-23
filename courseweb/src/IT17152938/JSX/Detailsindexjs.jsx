import React, { Component } from 'react';

 import '../CSS/Detailsindexjs.css';
import { CardDeck,Card} from 'react-bootstrap';

import img1 from '../img/tabimg/IT.png';
import img2 from '../img/tabimg/bm.png';
import img3 from '../img/tabimg/eng.png';
import img4 from '../img/tabimg/Science-Education.png';
import img5 from '../img/tabimg/pgd.png';

export default class Detailsindexjs extends Component {
    render() {
        return (
            <div className="DI" >
                <br/>
                    <br/>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>BSc (Hons) in Information Technology
                                Specializing in Software Engineering</Card.Title>
                            <Card.Text>
                                Software engineering is the discipline of designing, creating and
                                maintaining software by applying technologies and practices from computer science, project management.                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>BSc (Hons) in Information Technology
                                Specializing in Information Systems Engineering</Card.Title>
                            <Card.Text>
                                nformation systems engineering specialty programme is the key to
                                develop and manage complex systems that solve real-world problems.
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>BSc (Hons) in Information Technology
                                Specializing in Cyber Security</Card.Title>
                            <Card.Text>
                                The course is designed for students who wish to gain an
                                accelerated early career in cyber/information security.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img4}/>
                        <Card.Body>
                            <Card.Title>BSc (Hons) in Information Technology
                                Specializing in Interactive Media</Card.Title>
                            <Card.Text>
                                Our Interactive Media degree will give you the capability to
                                create the new varieties of interactive media content that are transforming our society and culture.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>BSc (Hons) in Information Technology
                                Specializing in Information Technology</Card.Title>
                            <Card.Text>
                                The programme is designed for technically focused students
                                who required to develop strong professional & academic capabilities in programming.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
                <br/>
            </div>
        );



    }



}



// Get the element with id="defaultOpen" and click on it
/*document.getElementById("defaultOpen").click();*/
