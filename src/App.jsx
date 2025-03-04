import "./style.scss";
import Dish from "./components/Dish";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";

function App() {
    return (
        <>
            <Header />
            <Container className="main-container">
                <Row>
                    <Col>
                        <Dish
                            name={"Tacos à l'unité"}
                            description={
                                "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique."
                            }
                            prix={"3 euros"}
                            image={"/tacos.jpg"}
                        />
                    </Col>
                    <Col>
                        <Dish
                            name={"Enchiladas"}
                            description={
                                "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus."
                            }
                            prix={"12 euros"}
                            image={"/mexican.jpg"}
                        />
                    </Col>
                    <Col>
                        <Dish
                            name={"Mole poblano"}
                            description={
                                "Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise"
                            }
                            prix={"15 euros"}
                            image={"/mole.jpg"}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default App;
