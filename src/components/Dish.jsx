export default function Dish({ slug, description, prix, image, stock }) {
    return (
        <div key={slug}>
            <p>{description}</p>
            <p>{prix}</p>
            <img src={image}></img>
            <p>{stock}</p>
        </div>
    );
}
