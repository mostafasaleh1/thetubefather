import { BedSharp } from "@mui/icons-material";
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': process.env.Youtube3APIKey,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchFromYoutubeAPI = async (url) => {
    const data = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}