import { useEffect, useState } from "react";
import axios from "axios";

const LOADING_STATES = ["loading", "success", "error"];


function useFetchCountriesData(url) {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(LOADING_STATES[0]);
    const [error, setError] = useState(null);
    if (!url || url.length === 0) {
        throw "invalid data url";
    }

    useEffect(() => {
        async function getData() {

            try {
                setLoadingStatus(LOADING_STATES[0]);
                const response = await axios.get(url);
                const countryData = JSON.parse(atob(response.data.content))
                setData(countryData);
                setLoadingStatus(LOADING_STATES[1]);
            } catch (error) {
                setError(error);
                setLoadingStatus(LOADING_STATES[2]);
            }
        }
        getData()

    }, [url]);


    return {
        data, // returns the data after loading status  === success
        loadingStatus, // ""success, "loading", "error"
        error
    }
}

export default useFetchCountriesData