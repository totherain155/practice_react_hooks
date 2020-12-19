import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { unstable_concurrentAct } from "react-dom/test-utils";


//useNetwork, useState, useEffect 사용 


const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine)

    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine)

        }

        setStatus(navigator.onLine)
    }

    useEffect(() => {


        window.addEventListener("online", handleChange)
        window.addEventListener("offline", handleChange)
        return () => {
            window.removeEventListener("online", handleChange)
            window.removeEventListener("offline", handleChange)
        }
    }, [])

    return status
}

const App = () => {
    const handleChangeNetwork = (online) => {
        console.log(online ? "we went online" : "goodbye")
    }
    const onLine = useNetwork(handleChangeNetwork)
    return (
        <div>
            <h2>{onLine ? "Hi again" : "goodbye"}</h2>
        </div>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
