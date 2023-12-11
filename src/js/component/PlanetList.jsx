import React, { useContext } from "react"
import { Card, CardBody, CardImg, CardText, CardTitle, Container } from "react-bootstrap"
import { Context } from "../store/appContext"

const PlanetList = () => {
    const {store, actions} = useContext(Context)
    return (
        <>
            <h2 className="text-danger">Planets</h2>
            <div className="d-flex flex-wrap overflow-auto">
                {store.planets.map((planet, key) => (
                    <Card className="m-2" key={key} style={{width: '200px'}}>
                        <div className="text-center text-dark bg-secondary">400 x 200</div>
                        <CardBody>
                            <CardTitle>{planet.name}</CardTitle>
                            <CardText>
                                <ul>
                                    <li>Rotation: {planet.rotation_period}</li>
                                    <li>Traslation: {planet.orbital_period}</li>
                                    <li>Gravity: {planet.gravity}</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                ))}
            
            </div>
        </>
        
    )
}

export default PlanetList