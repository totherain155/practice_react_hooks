import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotification = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission((permission) => {
                if (permission === "granted") {
                    new Notification(title, options);
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotification;
};

const App = () => {
    const makeNotif = useNotification("you like movie?", { body: "sure" });
    return (
        <div>
            <button onClick={makeNotif}> click here </button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
