import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


const useNotification = (title, option) => {

    if (!("Notification" in window)) {
        return
    }
    const makeNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, option)
                } else {
                    return
                }
            })
        } else {
            new Notification(title, option)
        }
    }
    return makeNotif;
}


const App = () => {
    const triggerNotif = useNotification("you like music?", {
        body: "yey"
    })
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <button onClick={triggerNotif}>Hi</button>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);