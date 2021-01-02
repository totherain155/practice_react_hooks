import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// , useRef, useEffect 사용

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
    });

    return element;
};

const App = () => {
    const sayHi = () => {
        console.log("hi");
    };
    const click = useClick(sayHi);
    return (
        <div>
            <h2 ref={click}>Hi</h2>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);
