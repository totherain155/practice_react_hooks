import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const content = [
    {
        tab: 1,
        detail: "we are in section 1"
    },
    {
        tab: 2,
        detail: "we are in section 2"
    }
];

const useTab = (initTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initTab);

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

const App = () => {
    const { currentItem, changeItem } = useTab(0, content);
    return (
        <div>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>section {section.tab}</button>
            ))}
            <div>{currentItem.detail} </div>
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
