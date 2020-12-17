export const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!callback || typeof callback !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return
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