import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
//useFadeIn , useEffect , useRef사용 


const useFadeIn = (duration = 1, delay = 0) => {

    const element = useRef()

    useEffect(() => {

        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }

    }, [])


    return { ref: element, style: { opacity: 0 } }
}


const App = () => {
    const fadeInH2 = useFadeIn(1, 2)
    const fadeInP = useFadeIn(5, 10)
    return (
        <div>
            <h2 {...fadeInH2}>Fade In</h2>
            <p {...fadeInP}>we are loading </p>
        </div >
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
