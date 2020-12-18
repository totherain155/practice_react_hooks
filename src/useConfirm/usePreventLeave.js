
const usePreventLeave = () => {


    const listener = (event) => {
        event.preventDefault()
        event.returnValue = ""
    }

    const protect = () => {
        window.addEventListener("beforeunload", listener)
    }
    const unprotect = () => {
        window.removeEventListener("beforeunload", listener)

    }
    return { protect, unprotect }
}


const App = () => {
    const { protect, unprotect } = usePreventLeave()

    return (
        <div>
            <button onClick={protect}>Protect</button>
            <button onClick={unprotect}>Unprotect</button>
        </div>
    )
}