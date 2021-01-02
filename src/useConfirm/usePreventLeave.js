import React from "react";
import ReactDOM from "react-dom";

const usePrevent = () => {
    const onClick = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };

    const enablePrevent = () => {
        window.addEventListener("beforeunload", onClick);
    };
    const disablePrevent = () => {
        window.removeEventListener("beforeunload", onClick);
    };

    return { enablePrevent, disablePrevent };
};

const App = () => {
    const { enablePrevent, disablePrevent } = usePrevent();
    return (
        <div>
            <button onClick={enablePrevent}> protect </button>
            <button onClick={disablePrevent}> unprotect</button>
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
