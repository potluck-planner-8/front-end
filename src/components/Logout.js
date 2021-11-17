import React, { useEffect } from 'react';
import axiosWithAuth from './axiosWithAuth';
    
    const Logout = (props) => {
        const { history } = props;

        useEffect(() => {
            axiosWithAuth() 
                .post('https://potluck-planner-8.herokuapp.com/api/auth/logout')
                     .then(r => {
                     console.log('')
                     localStorage.removeItem('token');
                     history.push('/loginPage');
                     }).catch((err) => console.log(err.message));
        }, [history]);

        const handleDelete = (id) => {
            axiosWithAuth()
                .delete('https://potluck-planner-8.herokuapp.com/api/auth/logout')
                .then((r) => {
                    setArticles(r.data)
                    push('/articles')
                })
                .catch((err) => console.log(err))
        }

        return(
            <div>
                <button className='logout' onClick={handleDelete}>Logout</button>
            </div>
        );
    }

export default Logout;