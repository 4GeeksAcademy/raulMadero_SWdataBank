import React, { useContext } from "react"
import { Card, CardBody, CardImg, CardText, CardTitle, Container } from "react-bootstrap"
import { Context } from "../store/appContext"

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
                        </CardBody>
                    </Card>
                ))}
            
            </div>
        </>
        
    )
}

export default VehiclesList