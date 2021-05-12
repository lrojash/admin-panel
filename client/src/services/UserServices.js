import ApiClient from './ApiClient';


export const __LoginUser = async (userData) => {
    try {
        const res = await ApiClient.post('/user/login', userData);
        // console.log('inside services : ', res);
        localStorage.setItem('token', res.data.token);
        return res.data;
    } catch (error) {
        throw error
    }
}

export const __RegisterUser = async (formData) => {
    try {
        const res = await ApiClient.post('/user/register', formData);
        return res.data;
    } catch (error) {
        throw error
    }
}

export const __CheckSession = async () => {
    try {
        // console.log('before api client; ');
        const res = await ApiClient.get('/user/refresh/session');
        // console.log('check session: ', res);
        return res.data
    } catch (error) {
        throw error
    }
}

export const __Logout = async () => {
    localStorage.removeItem('token');
}