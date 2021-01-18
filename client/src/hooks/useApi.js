import useFetch from "./useFetch";
import api from '../utils/ml_api'

const useApi = (url, method = "GET", body = null, header = []) => {
    const fetchApi = useFetch(
        `${api.DOMAIN}/${url}`,
        method,
        body,
        header
    );
    const { value } = fetchApi;
    if (
        value !== null &&
        (value.author.name !== process.env.REACT_APP_AUTHOR_NAME ||
            value.author.lastname !== process.env.REACT_APP_LAST_NAME)
    ) {
        throw new Error("No authorized");
    }
    return fetchApi;
};

export default useApi;