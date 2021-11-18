import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Landing = (props) => {
    const [potlucks, setPotlucks] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('https://potluck-planner-8.herokuapp.com/api/potlucks')
            .then(res=>{
                console.log(res)
            setPotlucks(res.data)
            })
            .catch(err=>{
            console.log(err)
            })
    }, [])

    return (
        <div>
        <Link to='/potluck-form'><button>Create Potluck!</button></Link>
            <div>
                {potlucks.map( potluck => {
                    return(
                        <div>
                        <h2>{potluck.location} </h2>
                        {potluck.date}
                        {potluck.time}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Landing;