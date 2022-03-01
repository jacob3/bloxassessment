// BLOX assessment api calls
import axios, { AxiosResponse } from 'axios';

const apiUrl = 'https://obu.nu/blox/assessment';

const getAllCoins = async (): Promise<AxiosResponse> => {
    return axios({
        url: apiUrl + '/',
        method: 'get'
    });
};

// Room for more api calls if necessary, I always like to setup my projects with room for expandability

export { getAllCoins };
