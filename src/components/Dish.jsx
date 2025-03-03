export default function Dish() {
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
            image: "/tacos.jpg",
            slug: "mole-poblano",
            stock: "5",
        },
    ];
    return (
        <main>
            {dishes.map((dish) => (
                <div key={dish.slug}>
                    <p>{dish.description}</p>
                    <p>{dish.prix}</p>
                    <img src={dish.image}></img>
                    <p>{dish.stock}</p>
                </div>
            ))}
        </main>
    );
}
