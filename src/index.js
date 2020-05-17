import React from "react";
import { render } from "react-dom";
import { StoreContext } from 'storeon/react'
import Todos from "./Components/Todos";
import store from "../src/store";

function App() {
    return (
        <>
            <StoreContext.Provider value={store}>
                <Todos />
            </StoreContext.Provider>
        </>
    )
}

const root = document.getElementById("root");
render(<App />, root)