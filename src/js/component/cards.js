import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

import "bootstrap";

export function Cards() {
	return (
		<CardGroup>
			<Card>
				<Card.Img variant="top" src="holder.js/500x325" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/500x325" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/500x325" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/500x325" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</CardGroup>
	);
}
