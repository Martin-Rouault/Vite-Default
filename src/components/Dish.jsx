import "../assets/style/dish.scss";

import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useCart from "../hooks/useCart";

export default function Dish({ name, prix, image, isNew }) {
    const { addToCart, removeFromCart } = useCart();

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
                <Button variant="secondary" onClick={addToCart} className="m-2">
                    Ajouter au panier
                </Button>
                <Button variant="danger" onClick={removeFromCart}>
                    Retirer du panier
                </Button>
            </Card.Body>
        </Card>
    );
}
