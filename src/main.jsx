import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.scss";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { CartContextProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </StrictMode>
);
