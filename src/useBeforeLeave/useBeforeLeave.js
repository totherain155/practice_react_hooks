import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return
    }
    const handleLeave = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handleLeave);
        return () => {
            document.removeEventListener("mouseleave", handleLeave);
        };
    }, []);
};

const App = () => {
    const giveMeChance = () => {
        console.log("plz don't leave me");
    };
    useBeforeLeave(giveMeChance);
    return <div> hi </div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);
