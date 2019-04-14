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
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img4}/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
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
