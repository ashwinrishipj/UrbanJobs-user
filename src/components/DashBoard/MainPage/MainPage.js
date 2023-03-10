import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function MainPage() {
    return (
        <>
            <Card className="bg-black curved-border shadow">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.

                    </Card.Text>
                    <Button variant="primary shadow-none" >Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="bg-black curved-border shadow">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        So
                        <Card className="bg-black curved-border shadow">
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.

                                </Card.Text>
                                <Button variant="primary shadow-none" >Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className="bg-black curved-border shadow">
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.

                                </Card.Text>
                                <Button variant="primary shadow-none" >Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className="bg-black curved-border shadow">
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.

                                </Card.Text>
                                <Button variant="primary shadow-none" >Go somewhere</Button>
                            </Card.Body>
                        </Card>me quick example text to build on the card title and make up the
                        bulk of the card's content.

                    </Card.Text>
                    <Button variant="primary shadow-none" >Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="bg-black curved-border shadow">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.

                    </Card.Text>
                    <Button variant="primary shadow-none" >Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}