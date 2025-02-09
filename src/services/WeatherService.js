const API_KEY = '63ee2ff4c3ee9423e33493526fc5aa0d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export default getWeatherData;