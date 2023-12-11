import React from "react"
import { Card, CardBody, CardImg, CardText, CardTitle, Container } from "react-bootstrap"

const CharacterList = () => {
    return (
        <Container className="container-lg">
            <h2 className="text-danger">Characters</h2>
            <Card style={{width: '400px'}}>
                <div className="text-center bg-secondary" style={{width: '400px', height: '200px'}}>400 x 200</div>
                <CardBody>
                    <CardTitle>Luke Skywalker</CardTitle>
                    <CardText>
                        <ul>
                            <li>Gender: </li>
                            <li>Hair Color:</li>
                            <li>Eye Color:</li>
                        </ul>
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    )
}

export default CharacterList