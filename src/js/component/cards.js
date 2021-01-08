import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "bootstrap";

export function Cards() {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					<p>
						Some quick example text to build on the card title and
						make up the bulk of the card content.
					</p>
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}
