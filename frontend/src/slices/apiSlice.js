//Since we are working with the back-end we use the createApi, fetchBaseQuery to get the data from back-end
import {createApi, fetchBaseQuery} from '@redux/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({baseURL: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product','Order','User'],
    endpoints: (builder) => ({})
});

