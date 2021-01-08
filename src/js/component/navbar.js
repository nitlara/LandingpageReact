import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export function Navbar2() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>

				<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">
						Action
					</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">
						Another action
					</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">
						Something
					</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">
						Separated link
					</NavDropdown.Item>
				</NavDropdown>
			</Navbar>
		</div>
	);
}
