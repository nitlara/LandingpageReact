import React, { useState } from "react";
import PropTypes from "prop-types";
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
				<Card.Text className="mx-3">{props.text}</Card.Text>
				<div className="card-footer bg-transparent">
					<Button variant="primary">Find Out More!</Button>
				</div>
			</Card.Body>
		</Card>
	);
}

Cards.propTypes = {
	image: PropTypes.img,
	title: PropTypes.string,
	text: PropTypes.string
};
