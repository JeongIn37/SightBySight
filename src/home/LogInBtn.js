import React from "react";
import { Link } from "react-router-dom";
import './home.css';

function LogInBtn() {
    return(
        <Link to='/Seats'>
            <button className='loginBtn'>로그인</button>
        </Link>
    );
}

export default LogInBtn;