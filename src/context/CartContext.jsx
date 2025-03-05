import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    function addToCart() {
        setCartCount(cartCount + 1);
    }

    const context = { cartCount, addToCart };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
