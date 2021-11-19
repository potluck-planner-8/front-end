import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
    const history = useHistory();
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    history.push('/classlist')
    return(
        <></>
    )
}

export default Logout;
// export default Logout