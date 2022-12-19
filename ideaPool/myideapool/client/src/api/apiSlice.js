import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../store/auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer $ {token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if(result?.error.originalStatus === 403){
        console.log('sending refersh token')

        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user 
            //store token
            api.dispatch(setCredentials({...refreshResult.fata, user }))
            //retru original query with new acces
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})