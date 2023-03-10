import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export default function chatBar(){
    return(
        <React.Fragment>
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
        </React.Fragment>
    )
}