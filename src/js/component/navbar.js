import React from "react";
import { Container, Navbar, NavbarBrand, NavDropdown, Image } from "react-bootstrap";
import logo from "../../img/sw.png"

export const Header = () => {
	return (
		<Navbar expand="lg" className="bg-tertiary">
			<Container>
				<NavbarBrand>
					<Image src={logo} alt="Star Wars Logo" width={150} height={100}/>
				</NavbarBrand>
				<NavDropdown title="Dropdown" id="basic-navbar-dropdown">
					<NavDropdown.Item></NavDropdown.Item>
				</NavDropdown>
			</Container>
		</Navbar>
	);
};
