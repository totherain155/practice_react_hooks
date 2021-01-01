import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useInput = (initValue, valid) => {
    const [value, setValue] = useState(initValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof valid === "function") {
            willUpdate = valid(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

const App = () => {
    const maxLen = (value) => value.length <= 10;
    const name = useInput("hey", maxLen);
    return (
        <div>
            <input placeholder="remember" {...name} />
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
