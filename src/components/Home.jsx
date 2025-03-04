import "../assets/style/home.scss";

import { useState } from "react";
import Dish from "./Dish";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
    const dishes = [
        {
            name: "Tacos",
            description:
                "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique.",
            price: "3€",
            image: "src/assets/img/tacos.jpg",
            slug: "tacos-a-l-unite",
            stock: "12",
            isNew: true,
        },
        {
            name: "Enchilidas",
            description:
                "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus.",
            price: "12",
            image: "src/assets/img//mexican.jpg",
            slug: "enchiladas",
            stock: "0",
            isNew: false,
        },
        {
            name: "Enchilidas",
            description:
                "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus.",
            price: "12",
            image: "src/assets/img//mexican.jpg",
            slug: "enchiladas",
            stock: "0",
            isNew: false,
        },
        {
            name: "Enchilidas",
            description:
                "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus.",
            price: "12",
            image: "src/assets/img//mexican.jpg",
            slug: "enchiladas",
            stock: "0",
            isNew: false,
        },
        {
            name: "Enchilidas",
            description:
                "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus.",
            price: "12",
            image: "src/assets/img//mexican.jpg",
            slug: "enchiladas",
            stock: "0",
            isNew: false,
        },
    ];

    const [showNewOnly, setShowNewOnly] = useState(false);

    function handleShowNewOnly() {
        setShowNewOnly(!showNewOnly);
    }

    console.log(showNewOnly);

    const filteredDishes = dishes.filter(() => !showNewOnly);

    return (
        <main>
            <Container className="main-container">
                <Button variant="primary mb-5" onClick={handleShowNewOnly}>
                    {showNewOnly
                        ? "Voir tous les plats"
                        : "Nouveautés uniquement"}
                </Button>
                <Row>
                    {filteredDishes.map(({ name, price, image, isNew }) => (
                        <Col key={name} md={5} lg={4} className="mb-4">
                            <Dish
                                name={name}
                                prix={price}
                                image={image}
                                isNew={isNew}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    );
}
