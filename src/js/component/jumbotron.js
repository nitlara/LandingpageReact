import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "bootstrap";

export function JumbotronComponent() {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>A warm wellcome</h1>
					<p>
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent. This is a modified
						jumbotron that occupies the entire horizontal space of
						its parent.
					</p>
					<>
						<Button variant="primary">Primary</Button>{" "}
					</>
				</Container>
			</Jumbotron>
		</div>
	);
}

