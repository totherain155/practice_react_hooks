import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useTitle from "@totherain155/use_title"

const App = () => {
    return (
        <div>
            <h2>hi_test</h2>
        </div>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);