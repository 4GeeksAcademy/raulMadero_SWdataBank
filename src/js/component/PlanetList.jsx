import React, { useContext } from "react"
import { Card, CardBody, CardText, CardTitle, Button, CardImg, Image } from "react-bootstrap"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const PlanetList = () => {
    const {store, actions} = useContext(Context)
    const handleInfo = (name) => {
        actions.getPlanet(name)
    }
    const handleClick = (type, name) => {
        actions.addFavourites(type, name)
    }
    return (
        <>
            <h2 className="text-danger">Planets</h2>
            <div className="d-flex flex-wrap overflow-auto">
                {store.planets.map((planet, key) => (
                    <Card className="m-2" key={key} style={{width: '200px'}}>
                        <CardImg variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${(key + 1) + ".jpg"}`}/>
                        <CardBody>
                            <CardTitle>{planet.name}</CardTitle>
                            <CardText>
                                <ul>
                                    <li>Rotation: {planet.rotation_period}</li>
                                    <li>Traslation: {planet.orbital_period}</li>
                                    <li>Gravity: {planet.gravity}</li>
                                </ul>
                            </CardText>
                            <Link to={"/planet"} className="btn btn-primary" onClick={() => handleInfo(planet.name)}>More info</Link>
                            <Button onClick={(e) => handleClick("planets", planet.name)} variant="outline-alert"><FontAwesomeIcon icon={faHeart} /></Button>
                        </CardBody>
                    </Card>
                ))}
            
            </div>
        </>
        
    )
}

export default PlanetList