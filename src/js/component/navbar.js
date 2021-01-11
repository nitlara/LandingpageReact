import React from "react";
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
	Col
} from "react-bootstrap";

//CON ESTOS IMPORTS TAMPOCO RECONOCE EL MODULE
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

//ARCHIVO ESPECIFICO CONTENEDOR DEL ICONO PARA RESPONSIVE MENU (COMO EL EJERCICIO DE SIMPLE COUNTER)
//RECOGIDO DE AQUI: https://github.com/breatheco-de/student-client/blob/master/src/js/utils/icons.js

//import "./icons.js";

export function Navbar2() {
	//const NavbarDropIcon = <i className="fas fa-bars" />;

	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				className="navbarcontainer fixed-top">
				<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto px-2">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#services">Services</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
