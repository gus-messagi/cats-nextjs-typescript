import Axios from 'axios';

export default (options: Object) => {
    return Axios({
        ...options,
        headers: {
            'x-api-key': process.env.apiKey
        },
        baseURL: 'https://api.thecatapi.com/v1'
    });
}