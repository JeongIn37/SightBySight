import React, {Component} from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import SignUpBtn from './SignUpBtn.js';
import SignUp from '../signUp/signUp';

function Home() {
    return (
        <div className='homepage'>
            <div className='logoImg'>
                <h1>로고 이미지 넣을 곳</h1>
            </div>
            <div className='login'>
                <p>
                    아이디:  
                    <input type="text" placeholder='아이디를 입력해주세요'/>
                </p>
                <p>
                    비밀번호: 
                    <input type="text" placeholder='비밀번호를 입력해주세요'/>
                </p> 

                <button>로그인</button>
                <SignUpBtn />

            
            </div>
        </div>
    )
}

export default Home;