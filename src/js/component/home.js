import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";
import { Navbar } from "./navbar.js";
import { JumbotronComponent } from "./jumbotron.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar />
			<JumbotronComponent />
			<Cards />
			<Footer />
		</div>
	);
}
