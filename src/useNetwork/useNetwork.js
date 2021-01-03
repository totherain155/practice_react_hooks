import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);

    const handleNetwork = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", handleNetwork);
        window.addEventListener("offline", handleNetwork);
        return () => {
            window.removeEventListener("online", handleNetwork);
            window.removeEventListener("offline", handleNetwork);
        };
    }, []);

    return status;
};

const App = () => {
    const networkChange = (online) => {
        console.log(online ? "we are online" : "we are offline");
    };
    const onLine = useNetwork(networkChange);
    return (
        <div>
            <h3>{onLine ? "online" : "offline"} </h3>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
