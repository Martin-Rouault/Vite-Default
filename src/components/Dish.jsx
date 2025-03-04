import "../assets/style/dish.scss";

import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Dish({ name, prix, image, isNew, addToCart }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} className="dish-img" />
            {isNew && (
                <Badge bg="primary" className="badge">
                    Nouveau
                </Badge>
            )}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{prix}€</Card.Text>
                <Button variant="secondary" onClick={() => addToCart()}>
                    Ajouter au panier
                </Button>
            </Card.Body>
        </Card>
    );
}
