import Axios from './apiConfig';
import useSWR from 'swr';
import { AxiosResponse } from 'axios';

export function useFetch(url: string) {
    const { data } = useSWR(url, async url => {
        return Axios({
            method: 'GET',
            url
        }).then((res: AxiosResponse) => res.data);
    });
    console.log(data);
    return data;
}