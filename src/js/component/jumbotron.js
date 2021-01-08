import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import "bootstrap";

export function Jumbotron() {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>A warm wellcome</h1>
					<p>
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
}
