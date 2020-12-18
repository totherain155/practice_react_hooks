import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
    /*  if (typeof onBefore !== "function") {
          return;
      }*/
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }

    }


    useEffect(() => {
        document.addEventListener("mouseleave", handle)
        return () => document.removeEventListener("mouseleave", handle)

    }, [])

};

const App = () => {
    const begForLife = () => {
        console.log("pls don't leave")
    }
    useBeforeLeave(begForLife)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

//useBeforeLeave , mouseleave, useEffect 사용 

const useBeforeLeave = (onBefore) => {

    const leave = (event) => {
        const { clientY } = event
        if (clientY <= 0) {
            onBefore()
        }
    }

    useEffect(() => {
        document.addEventListener("mouseleave", leave)
        return () => {
            document.removeEventListener("mouseleave", leave)
        }
    }, [])
}


const App = () => {

    const whenYouLeave = () => {
        console.log("don't leave here")
    }
    useBeforeLeave(whenYouLeave)

    return (
        <div>
            <h2>Hi</h2>
        </div>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
