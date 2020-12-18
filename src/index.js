import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { unstable_concurrentAct } from "react-dom/test-utils";
//useFadeIn , useEffect , useRef사용 

const useFadeIn = (duration = 1, delay = 0) => {

    const element = useRef()

    useEffect(() => {
        if (element.current) {
            const { current } = element
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = 1

        }
    }, [])


    return { ref: element, style: { opacity: 0 } };


}



const App = () => {

    const fadeInH2 = useFadeIn(3, 5)

    const fadeInP = useFadeIn(6, 10)


    return (
        <div>
            <h2 {...fadeInH2}>Fade In</h2>
            <p  {...fadeInP}>we are comming</p>
        </div>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
