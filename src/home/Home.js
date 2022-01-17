import React, {Component, useState} from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import SignUp from '../signUp/signUp';
import { Link } from "react-router-dom";
import './home.css';

function Home() {

    const[cursorX, setCursorX] = useState();
    const[cursorY, setCursorY] = useState();
  
    window.addEventListener('mousemove', (e) => {
      setCursorX(e.pageX)
      setCursorY(e.pageY)
    })

    return (
        <div className='homepage'>
            <div className='logoImg'>
                <h1>로고 이미지 넣을 곳</h1>
            </div>
            <div className='login'>
                <table className='loginTable'>
                    <tbody>
                        <tr>
                            <td className='tableItem'><p className='homeText'>아이디:</p></td>
                            <td className='tableItem'><input type="text" placeholder='아이디를 입력해주세요'/></td>
                        </tr>
                        <tr>
                            <td className='tableItem'><p className='homeText'>비밀번호:</p></td>
                            <td className='tableItem'><input type="password" placeholder='비밀번호를 입력해주세요'/></td>
                        </tr>
                    </tbody>
                </table>
                   
                <Link to='/Seats'>
                    <button className='loginBtn'>로그인</button>
                </Link>
                <Link to='/SignUp'>
                    <button className='signupBtn'>회원가입</button>
                </Link>

            
            </div>

            <div className='cursor' style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px'
            }}/>

        </div>
    )
}

export default Home;