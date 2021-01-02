import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// , useRef, useEffect 사용

const useHover = (onEnter) => {
    if (typeof onEnter !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onEnter);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onEnter);
            }
        };
    }, []);
    return element;
};

const App = () => {
    const sayHi = () => {
        console.log("hover");
    };
    const hover = useHover(sayHi);
    return (
        <div>
            <h2 ref={hover}>hi </h2>
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
