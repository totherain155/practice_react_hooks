import React, { useEffect, useState } from "react";

/* useTitle, useEffeft 사용하여 title tag 변경  */

const useTitle = (initTitle) => {
    const [title, setTitle] = useState(initTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

const App = () => {
    const titleUpdator = useTitle("we are loading...");
    setTimeout(() => titleUpdator("welcome"), 5000);
    return <div> </div>;
};

export default App;