import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Landing = (props) => {
    const [potlucks, setPotlucks] = useState([]);


    



    return (
        <div>
        <Link to='/potluck-form'><button>Create Potluck!</button></Link>

        </div>
    )
}



export default Landing;