import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";
import { Navbar2 } from "./navbar.js";
import { JumbotronComponent } from "./jumbotron.js";
import { CardDeck } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar2 />
			<JumbotronComponent />
			<CardDeck className="mb-4">
				<Cards
					title={"Card title"}
					image={"http://placehold.it/500x325.jpg"}
					text={
						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					}
				/>
				<Cards
					title={"Card title 2"}
					image={"http://placehold.it/500x325.jpg"}
					text={
						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					}
				/>
				<Cards
					title={"Card title 3"}
					image={"http://placehold.it/500x325.jpg"}
					text={
						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					}
				/>
				<Cards
					title={"Card title 4"}
					image={"http://placehold.it/500x325.jpg"}
					text={
						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					}
				/>
			</CardDeck>
			<Footer />
		</div>
	);
}
