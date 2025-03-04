import "./style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";

function App() {
    const [cartCount, setCartCount] = useState(0);

    function addToCart() {
        setCartCount(cartCount + 1);
    }

    console.log(cartCount);
    return (
        <>
            <Header cartCount={cartCount} />
            <Home addToCart={addToCart} />
            <Footer />
        </>
    );
}

export default App;
