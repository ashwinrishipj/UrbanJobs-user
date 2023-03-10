import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function SideBar() {
    return (
        <React.Fragment>
            <div className="sticky-left">
                <Card className="bg-black curved-border shadow">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.

                        </Card.Text>
                        <Button variant="primary shadow-none" >Go somewhere</Button>

                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    )
}



