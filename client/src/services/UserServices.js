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

export const __SearchUser = async (search) => {
    // console.log('reaching services', search)
    try {
        const user = await ApiClient.put('/user/findUser', search);
        return user
    } catch (error) {
        throw error
    }
}

export const __DeleteUser = async (id) => {
    // console.log('reached delete services: ', id);
    try {
        const res = await ApiClient.delete('/user/deleteUser', { data: { id } });
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetAllUsers = async () => {
    // console.log('reached services: ');
    try {
        const res = await ApiClient.get('/user/allusers');
        // console.log('after request:  ', res.data);
        return res.data;
    } catch (error) {
        throw error
    }
}

export const __Logout = async () => {
    localStorage.removeItem('token');
}