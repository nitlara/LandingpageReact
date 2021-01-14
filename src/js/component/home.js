import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";
import { Navbar2 } from "./navbar.js";
import { JumbotronComponent } from "./jumbotron.js";
import { CardDeck } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap";
import { element } from "prop-types";

//create your first component
export function Home() {
	const allCards = [
		{
			title: "Card title 1",
			image: "http://placehold.it/500x325.jpg",
			text:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
		},
		{
			title: "Card title 2",
			image: "http://placehold.it/500x325.jpg",
			text:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
		},
		{
			title: "Card title 3",
			image: "http://placehold.it/500x325.jpg",
			text:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
		},
		{
			title: "Card title 4",
			image: "http://placehold.it/500x325.jpg",
			text:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
		}
	];

	const allCardElements = allCards.map((element, index) => (
		<Cards
			key={index}
			title={element.title}
			image={element.image}
			text={element.text}
		/>
	));
	return (
		<div className="container">
			<Navbar2 />
			<JumbotronComponent />
			<CardDeck className="mb-4">{allCardElements}</CardDeck>
			<Footer />
		</div>
	);
}
