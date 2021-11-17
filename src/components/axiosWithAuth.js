import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://potluck-planner-8.herokuapp.com/api/auth',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;
