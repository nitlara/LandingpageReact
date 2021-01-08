import React from "react";
import { cards } from "./cards.js";
import { footer } from "./footer.js";
import { jumbotron } from "./jumbotron.js";
import { navbar } from "./navbar.js";

//import boostrap elements
import Jumbotron from "react-bootstrap/Jumbotron";

//create your first component
export function Home() {
	return (
		<div className="container">
			<navbar />
			<jumbotron />
			<cards />
			<footer />
		</div>
	);
}
