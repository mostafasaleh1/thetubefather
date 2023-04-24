import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': "d385092d84msh93f769b3882d573p1ec6c5jsnc02c1e637773",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchFromYoutubeAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}