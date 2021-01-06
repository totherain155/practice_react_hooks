import { useEffect, useState } from "react"

export const useTitle = (initTitle) => {
    const [title, setTitle] = useState(initTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};