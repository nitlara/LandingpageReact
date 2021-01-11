import React from "react";
// en teoria no hay que importar así bootstrap no?
//import "bootstrap/dist/css/bootstrap.min.css";
//sino así:
import "bootstrap";

//Elementos bootstrap para este componente
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export function JumbotronComponent() {
	return (
		<div>
			<Jumbotron fluid className="rounded">
				<Container>
					<h1>A warm wellcome</h1>
					<p>
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent. This is a modified
						jumbotron that occupies the entire horizontal space of
						its parent.
					</p>
					<>
						<Button variant="primary" size="lg">
							Call to action
						</Button>{" "}
					</>
				</Container>
			</Jumbotron>
		</div>
	);
}
