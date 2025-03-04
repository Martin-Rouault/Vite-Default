import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Dish({ name, prix, image }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} className="dish-img" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{prix}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}
