import React from "react";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";
import { Navbar } from "./navbar.js";

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
