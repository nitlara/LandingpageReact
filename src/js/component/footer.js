import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export function Footer() {
	return (
		<div>
			<Navbar bg="dark" variant="dark" className="justify-content-center">
				<div className="footer-copyright py-1 text-center my-3">
					2021 © Copyright:
					<a
						id="footer-link-react-copyright"
						href="https://github.com/nitlara">
						<strong> Nitlara </strong>
					</a>
					<a
						id="footer-link-react-copyright"
						href="https://github.com/Alvarodevs">
						<strong> Alvarodevs </strong>
					</a>
				</div>
			</Navbar>
		</div>
	);
}
