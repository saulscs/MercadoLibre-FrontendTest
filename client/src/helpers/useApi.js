import useFetch from "./useFetch";


const useApi = (props) => {
    let {url, method = "GET", body = null, header = []} = props;
    const fecthApi = useFetch(
        `${url}`,
        method,
        body,
        header
    );
    const { value } = fecthApi;
    if (
        value !== null &&
        (value.author.name !== process.env.REACT_APP_AUTHOR_NAME ||
            value.author.lastname !== REACT_APP_LAST_NAME)
    ) {
        throw new Error("Unauthorized sign");
    }
    return fecthApi;
};

export default useApi;