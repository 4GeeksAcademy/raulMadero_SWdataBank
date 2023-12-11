import React, { useContext } from "react"
import { Card, CardBody, CardImg, CardText, CardTitle, Container } from "react-bootstrap"
import { Context } from "../store/appContext"

const CharacterList = () => {
    const {store, actions} = useContext(Context)
    return (
        <>
            <h2 className="text-danger">Characters</h2>
            <div className="d-flex flex-wrap overflow-auto">
                {store.characters.map((character, key) => (
                    <Card className="m-2" key={key} style={{width: '200px'}}>
                        <div className="text-center text-dark bg-secondary">400 x 200</div>
                        <CardBody>
                            <CardTitle>{character.name}</CardTitle>
                            <CardText>
                                <ul>
                                    <li>Gender: {character.gender}</li>
                                    <li>Hair Color: {character.hair_color}</li>
                                    <li>Eye Color: {character.eye_color}</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                ))}
            
            </div>
        </>
        
    )
}

export default CharacterList