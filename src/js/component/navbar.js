import React, { useContext, useEffect } from "react";
import { Container, Navbar, NavbarBrand, NavDropdown, Image, Button } from "react-bootstrap";
import logo from "../../img/sw.png"
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
	const {store, actions} = useContext(Context)
	const handleDelete = (index) => {
		actions.removeFav(index)
	}
	useEffect(() => {
	}, [store.favourites])
	return (
		<Navbar expand="lg" className="bg-tertiary">
			<Container>
				<NavbarBrand>
					<Image src={logo} alt="Star Wars Logo" width={150} height={100}/>
				</NavbarBrand>
				<NavDropdown title="Favourites" id="basic-navbar-dropdown">
					{store.favourites.map((fav, key) => (
					<NavDropdown.Item className="d-flex justify-content-between align-items-center" key={key}>{fav.name}<Button className="ms-2" onClick={() => handleDelete(key)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button></NavDropdown.Item>
					))}
				</NavDropdown>
			</Container>
		</Navbar>
	);
};
