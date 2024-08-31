import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Cards from "./Cards";

function App() {
    return (
        <div className="m-10">
            <Navbar />
            <Cards />
        </div>
    );
}

export default App;
