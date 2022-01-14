import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function MyPageBtn() {
    return(
        <Link to='/MyPage'>
            <button className="mypagebtn">My Page</button>
        </Link>
    );
}

export default MyPageBtn;