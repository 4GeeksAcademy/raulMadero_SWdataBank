import React from "react"
import { useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"

const Character = () => {
    const {store, actions} = useContext(Context)
    return (
        <Container>
            <Link to={"/"} className="btn btn-primary my-5">Home</Link>
            <Row>
                <Col>
                    <div className="bg-secondary" style={{width: "100%", height: "100%"}}></div>
                </Col>
                <Col>
                    <h1>{store.character.name}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis nisi reprehenderit corrupti ipsa? Optio velit quae totam quis ratione temporibus qui nesciunt suscipit ea corporis. Dicta iure perferendis impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus aperiam quibusdam optio debitis accusantium aut incidunt libero ipsa eum culpa voluptatem, porro officia architecto ullam doloremque, nemo quia explicabo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, laborum illum neque repellat commodi voluptatum atque at! Quis earum, laudantium assumenda numquam explicabo excepturi asperiores dolore animi, quia quo dolorum.</p>
                </Col>
            </Row>
            <Row className="border border-start-0 border-bottom-0 border-end-0 border-top-2 border-danger mt-3">
                <Col>
                    <p className="text-danger my-0 text-center">Name</p>
                    <p className="text-danger my-0 text-center">{store.character.name}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Birth Year</p>
                    <p className="text-danger my-0 text-center">{store.character.birth_year}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Gender</p>
                    <p className="text-danger my-0 text-center">{store.character.gender}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Height</p>
                    <p className="text-danger my-0 text-center">{store.character.height}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Skin Color</p>
                    <p className="text-danger my-0 text-center">{store.character.skin_color}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Eye Color</p>
                    <p className="text-danger my-0 text-center">{store.character.eye_color}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Character