import "./App.css";
import Dish from "./components/Dish";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    const dishes = [
        {
            description:
                "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique.",
            prix: "3€",
            image: "/tacos.jpg",
            slug: "tacos-a-l-unite",
            stock: "12",
        },
        {
            description:
                "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus.",
            prix: "12€",
            image: "/mexican.jpg",
            slug: "enchiladas",
            stock: "0",
        },
        {
            description:
                "Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise.",
            prix: "15€",
            image: "/mole.jpg",
            slug: "mole-poblano",
            stock: "5",
        },
    ];
    return (
        <>
            <Header />
            <main>
                <Dish
                    description={dishes[0].description}
                    prix={dishes[0].prix}
                    image={dishes[0].image}
                    slug={dishes[0].slug}
                    stock={dishes[0].stock}
                />
                <Dish
                    description={dishes[1].description}
                    prix={dishes[1].prix}
                    image={dishes[1].image}
                    slug={dishes[1].slug}
                    stock={dishes[1].stock}
                />
                <Dish
                    description={dishes[2].description}
                    prix={dishes[2].prix}
                    image={dishes[2].image}
                    slug={dishes[2].slug}
                    stock={dishes[2].stock}
                />
            </main>
            <Footer />
        </>
    );
}

export default App;
