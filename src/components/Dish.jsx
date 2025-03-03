export default function Dish({ name, description, prix, image }) {
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{prix}</p>
            <img src={image}></img>
        </div>
    );
}
