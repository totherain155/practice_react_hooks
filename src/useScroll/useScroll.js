import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// useScroll function 만들어서 useEffect, useState 사용하기

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    })
    const handleScroll = () => {
        setState({ x: window.scrollX, y: window.scrollY })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return state;

}

const App = () => {
    const { y } = useScroll()
    return (
        <div style={{ height: "1000vh" }}>

            <h2 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h2>
        </div >
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
