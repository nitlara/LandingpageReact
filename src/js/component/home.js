import React from "react";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";
import { JumbotronComponent } from "./jumbotron.js";
import { Navbar } from "./navbar.js";

//import boostrap elements
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
}
