import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {

    const nickName = "testnickname"

    const logout = () => {
        sessionStorage.removeItem("user_id");

        window.location.href = "/";
    }

    if(window.location.pathname === '/') {
        return null;
    }

    return(
        <div className='header'>
            <div className='titleBar'>
                <div className='title'>
                    <Link to='/Seats'>
                        <h1 className='titletext'>Sight by Sight</h1>
                    </Link>
                    
                </div>
                <div className='mybtnwrap'>
                    <Link to = {`/MyPage/${nickName}`}>
                        <button className="mybtn">My Page</button>
                    </Link>
                    <button className="mybtn" onClick={logout}>로그아웃</button>
                </div>
            </div>
        </div>
    )
}

export default Header;