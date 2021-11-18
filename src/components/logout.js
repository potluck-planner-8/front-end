import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const Logout = () => {  
   
    useEffect(() => {
        axiosWithAuth()
            .post('https://potluck-planner-8.herokuapp.com/api/auth/logout')
            .then(r => {
                console.log('£', r)
                localStorage.removeItem('token');
            }).catch((err) => console.log(err.message));
    },[]);

    return (
        <div>
            <button className='logout' onClick={handleDelete}>Logout</button>
        </div>
    )
}

// export default Logout