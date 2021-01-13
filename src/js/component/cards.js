import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

import "bootstrap";
import { CardDeck } from "react-bootstrap";

export function Cards(props) {
	return (
		    <Card className="border rounded text-center">
				<Card.Img variant="top" src={props.image} />
				<Card.Body className="p-0">
					<Card.Title className="mx-3 mt-4"> {props.title}</Card.Title>
					<Card.Text className="mx-3">
						{props.text}
					</Card.Text>
					<div className="card-footer bg-transparent">
						<Button variant="primary">Find Out More!</Button>
					</div>
				</Card.Body>
			</Card>
		</CardDeck>
	);
}

Cards.propTypes = {
    image: PropTypes.img,
    title: PropTypes.string,
    text: PropTypes.string,
};



render(){
    return (
    <CardDeck
        image="http://placehold.it/500x325.jpg"
        title= "Card title"
        text= "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
    />
    )}
    