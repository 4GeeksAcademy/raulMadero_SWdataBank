import React, { useContext } from "react";
import { Container, Navbar, NavbarBrand, NavDropdown, Image } from "react-bootstrap";
import logo from "../../img/sw.png"
import { Context } from "../store/appContext";

export const Header = () => {
	const {store, actions} = useContext(Context)
	let favourites = []
	const handleFav = () => {
		favourites = store.favourites
		console.log(favourites)
	}
	return (
		<Navbar expand="lg" className="bg-tertiary">
			<Container>
				<NavbarBrand>
					<Image src={logo} alt="Star Wars Logo" width={150} height={100}/>
				</NavbarBrand>
				<NavDropdown onClick={() => handleFav()} title="Favourites" id="basic-navbar-dropdown">
					{favourites.map((fav, key) => (
					<NavDropdown.Item key={key}>{fav.name}</NavDropdown.Item>
					))}
				</NavDropdown>
			</Container>
		</Navbar>
	);
};
