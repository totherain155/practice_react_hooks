import React from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", callback, rejection) => {
    if (typeof callback !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            rejection();
        }
    };
    return confirmAction;
};

const App = () => {
    const deleteWorld = () => {
        console.log("Deleting the world..");
    };
    const stop_over = () => {
        console.log("stop_over")
    }
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, stop_over);
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the world </button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
