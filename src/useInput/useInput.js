import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// input tag에 validator function 만들어주기

const useInput = (initValue, validator) => {
    const [value, setValue] = useState(initValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;

        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};

const App = () => {
    const maxLen = (value) => value.length <= 10;
    const inputContent = useInput("Mr", maxLen);
    return (
        <div>
            <h2>hi</h2>
            <input placeholder="welcome" {...inputContent} />
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
