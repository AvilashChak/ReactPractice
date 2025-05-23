import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        axios.get(url)
        .then((response) => {
            if(isMounted) {
                setData(response.data);
                setIsLoading(false);
            }
        })
        .catch((err) => {
            if(isMounted) {
                setError(err.message);
                setIsLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;