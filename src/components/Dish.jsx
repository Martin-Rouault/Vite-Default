import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Dish({ name, prix, image, isNew }) {
    function addToCart(name) {
        alert(`Le plat ${name} a bien été ajouté à votre panier`);
    }
    return (
        <Card style={{ width: "18rem" }}>
            {isNew ? (
                <Badge bg="primary" className="badge">
                    Nouveau
                </Badge>
            ) : (
                ""
            )}
            <Card.Img variant="top" src={image} className="dish-img" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{prix}€</Card.Text>
                <Button variant="secondary" onClick={() => addToCart(name)}>
                    Ajouter au panier
                </Button>
            </Card.Body>
        </Card>
    );
}
