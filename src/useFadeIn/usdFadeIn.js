import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration, delay) => {
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ${delay}s `;
            current.style.opacity = 1;
        }
    });

    return { ref: element, style: { opacity: 0 } };
};

const App = () => {
    const fadeInH3 = useFadeIn(3, 5);
    return (
        <div>
            <h3 {...fadeInH3}>Hi</h3>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
