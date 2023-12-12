import React, { useContext } from "react"
import { Card, CardBody, CardText, CardTitle, Button } from "react-bootstrap"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const VehiclesList = () => {
    const {store, actions} = useContext(Context)
    return (
        <>
            <h2 className="text-danger">Vehicles</h2>
            <div className="d-flex flex-wrap overflow-auto">
                {store.vehicles.map((vehicle, key) => (
                    <Card className="m-2" key={key} style={{width: '200px'}}>
                        <div className="text-center text-dark bg-secondary">400 x 200</div>
                        <CardBody>
                            <CardTitle>{vehicle.model}</CardTitle>
                            <CardText>
                                <ul>
                                    <li>Length: {vehicle.crew}</li>
                                    <li>Passengers: {vehicle.passengers}</li>
                                    <li>Class: {vehicle.vehicle_class}</li>
                                </ul>
                            </CardText>
                            <Link to={"/vehicle"} className="btn btn-primary" onClick={() => handleInfo(vehicle.name)}>More info</Link>
                            <Button onClick={(e) => handleClick("vehicles", vehicle.name)} variant="outline-alert"><FontAwesomeIcon icon={faHeart} /></Button>
                        </CardBody>
                    </Card>
                ))}
            
            </div>
        </>
        
    )
}

export default VehiclesList