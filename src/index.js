import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.development";

//useFullscreen, useRef 사용 

const useFullscreen = (callback) => {
    const element = useRef()
    const runCb = (isFull) => {
        callback(isFull)
    }
    const triggerFullscreen = () => {
        if (element.current) {
            element.current.requestFullscreen()
            runCb(true)
        }

    }

    const exitFullscreen = () => {
        document.exitFullscreen()
        runCb(false)
    }

    return { element, triggerFullscreen, exitFullscreen };
}

const App = () => {
    const onFull = (isitFull) => {
        console.log(isitFull ? "we are full" : "we are small")
    }
    const { element, triggerFullscreen, exitFullscreen } = useFullscreen(onFull)
    return (
        <div ref={element}>
            <img src="https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg" />
            <button onClick={triggerFullscreen}>MakeFullscreen</button>
            <button onClick={exitFullscreen}>ExitFullscreen</button>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);