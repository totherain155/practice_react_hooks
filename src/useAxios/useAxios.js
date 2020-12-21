import defaultAxios from "axios";
import React, { useState, useEffect } from "react";

const useAxios = (options, instanceAxios = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    if (!options.url) {
        return;
    }
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    };

    useEffect(() => {
        instanceAxios(options)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    error
                });
            });
    }, [trigger]);

    return { ...state, refetch };
};

export default useAxios;
