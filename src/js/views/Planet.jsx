import React from "react"
import { useContext } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"

const Planet = () => {
    const {store, actions} = useContext(Context)
    return (
        <Container>
            <Link to={"/"} className="btn btn-primary my-5">Home</Link>
            <Row>
                <Col>
                    <Image src={`https://starwars-visualguide.com/assets/img/planets/${store.index + ".jpg"}`} alt="Photo character" />
                </Col>
                <Col>
                    <h1>{store.planet.name}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis nisi reprehenderit corrupti ipsa? Optio velit quae totam quis ratione temporibus qui nesciunt suscipit ea corporis. Dicta iure perferendis impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus aperiam quibusdam optio debitis accusantium aut incidunt libero ipsa eum culpa voluptatem, porro officia architecto ullam doloremque, nemo quia explicabo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, laborum illum neque repellat commodi voluptatum atque at! Quis earum, laudantium assumenda numquam explicabo excepturi asperiores dolore animi, quia quo dolorum.</p>
                </Col>
            </Row>
            <Row className="border border-start-0 border-bottom-0 border-end-0 border-top-2 border-danger mt-3">
                <Col>
                    <p className="text-danger my-0 text-center">Name</p>
                    <p className="text-danger my-0 text-center">{store.planet.name}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Rotation Period</p>
                    <p className="text-danger my-0 text-center">{store.planet.rotation_period}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Gravity</p>
                    <p className="text-danger my-0 text-center">{store.planet.gravity}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Climate</p>
                    <p className="text-danger my-0 text-center">{store.planet.climate}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Terrain</p>
                    <p className="text-danger my-0 text-center">{store.planet.terrain}</p>
                </Col>
                <Col>
                    <p className="text-danger my-0 text-center">Population</p>
                    <p className="text-danger my-0 text-center">{store.planet.population}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Planet