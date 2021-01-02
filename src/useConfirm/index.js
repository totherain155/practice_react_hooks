import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

//  delete button 클릭시 confirm message 띄우기

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};

const App = () => {
    const confirmDelete = () => {
        console.log("bye");
    };
    const cancelAction = () => {
        console.log("okok");
    };
    const DeleteWorld = useConfirm("are you sure", confirmDelete, cancelAction);

    return (
        <div>
            <button onClick={DeleteWorld}>delete_world</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);
