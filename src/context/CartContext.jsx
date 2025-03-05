import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducer/CartReducer";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartCount: state.cartCount, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
