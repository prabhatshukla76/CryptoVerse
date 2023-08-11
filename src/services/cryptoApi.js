import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '06434e09e4mshdcbfc4bb3eec4fbp15fcb8jsnb33b56f4702b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}
const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest =  (url) => ({url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>  ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query: (count) => createRequest(`/exchanges`),
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/?${uuid}`),
        }),
        getCryptoHistory: builder.query({
            query: ({uuid, timePeriod}) => createRequest(`/coin/?${uuid}/history/$timePeriod=${timePeriod}`),
        })
})


});

export const {
    useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;