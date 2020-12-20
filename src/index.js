import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
            callback(isFull)
        }
    }
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen()
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen()
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            } /* 예를들어 firefox는 requestFullscreen()이 아니라 
            mozRequestFullScreen()이다. opera는 webkit이고 Microsoft는 ms이다. */
            runCb(true)
        }
    }
    const exitFull = () => {

        document.exitFullscreen()

        runCb(false);
    };

    return { element, triggerFull, exitFull };
}


const App = () => {
    const onFulls = (isFull) => { //boolean type으로 받는다.
        console.log(isFull ? "we are full" : "we are small")
    }

    const { element, triggerFull, exitFull } = useFullscreen(onFulls)
    return (
        <div className="App" style={{ height: "1000vh" }} >
            <div ref={element}>
                <img src="https://static7.depositphotos.com/1001651/762/i/950/depositphotos_7620905-stock-photo-big-and-small-apples-on.jpg" />
            </div>

            <button onClick={triggerFull}>Make fullscreen</button>
            <button onClick={exitFull}>Exit fullscreen</button>

        </div >
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);