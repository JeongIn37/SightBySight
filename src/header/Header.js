import React from 'react';
import './header.css';
import MyPageBtn from './MyPageBtn.js';

function Header() {
    return(
        <div className='header'>
            <div className='titleBar'>
                <div className='title'>
                    <h1 className='titletext'>Sight by Sight</h1>
                </div>
                <div className='mypagebtnwrap'>
                    <MyPageBtn />
                </div>
            </div>
        </div>
    )
}

export default Header;