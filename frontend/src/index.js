import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";
import "./css/index.css";
import App from "./components/App";
import { StyledEngineProvider } from "@mui/material";

//TODO switch to dark mode
// https://mui.com/material-ui/customization/theming/#themeprovider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StyledEngineProvider injectFirst>
        <App />
    </StyledEngineProvider>
);
