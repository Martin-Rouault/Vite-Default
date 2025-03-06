import "./style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { useContext, useEffect, useRef } from "react";
import CartContext from "./context/CartContext";

function App() {
    const { cartCount } = useContext(CartContext);
    const prevCountRef = useRef(0);

    useEffect(() => {
        prevCountRef.current = cartCount;
    }, [cartCount]);
    return (
        <>
            <Header />
            <Home cartCount={cartCount} prevCountRef={prevCountRef} />
            <Footer />
        </>
    );
}

export default App;
