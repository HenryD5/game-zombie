
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

export const useToken = () => {

    const setToken = (userId: number) => {
        cookies.set('AUTH_TOKEN', userId.toString(), '7d')
    }

    const getToken = () => {
        if (cookies.get('AUTH_TOKEN')) {
            return cookies.get('AUTH_TOKEN')
        }
        return null
    }

    const setAuthData = (data: any) => {
        const auth = JSON.stringify(data)
        cookies.set('AUTH_DATA', auth, '7d')
    }

    const getAuthData = () => {
        if (cookies.get('AUTH_DATA')) {
            const auth = cookies.get('AUTH_DATA')
            return JSON.parse(auth)
        } else {
            return {}
        }
    }

    const updateAuthData = (key: any, val: any) => {
        let authData = JSON.parse(cookies.get('AUTH_DATA'))
        let data = JSON.parse(authData)
        data[key] = val
        const dataJson = JSON.stringify(data)
        cookies.set('AUTH_DATA', JSON.stringify(dataJson), '7d')
    }

    return {
        setToken,
        getToken,
        setAuthData,
        getAuthData,
        updateAuthData
    }
}