import React from "react";
import ReactDOM from "react-dom";

// useConfirm 사용하여 console에 message 띄우기

const useConfirm = (message = "", onConfirm, onCancel) => {

    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm()
        } else {
            onCancel()
        }

    }
    return confirmAction
}


const App = () => {
    const deleteSome = () => {
        console.log('good bye!')
    }
    const stopOver = () => {
        console.log('stop_over')
    }
    const deleteSomething = useConfirm("Are you sure to quit?", deleteSome, stopOver)

    return (
        <div>
            <button onClick={deleteSomething}>DeleteButton</button>
        </div>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
