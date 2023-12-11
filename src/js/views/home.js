import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterList from "../component/CharactersList.jsx";
import PlanetList from "../component/PlanetList.jsx";
import VehiclesList from "../component/VehiclesList.jsx";

export const Home = () => {
	return (
		<>
			<CharacterList />
			<PlanetList />
			<VehiclesList />
		</>
	)
}
