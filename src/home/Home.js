import React, {Component, useState} from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import SignUp from '../signUp/signUp';
import { Link } from "react-router-dom";
import './home.css';
import axios from 'axios';


axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Home = () => {

    const[cursorX, setCursorX] = useState();
    const[cursorY, setCursorY] = useState();
  
    window.addEventListener('mousemove', (e) => {
      setCursorX(e.pageX)
      setCursorY(e.pageY)
    })

    const login = () => {
        const userId = document.getElementsByName('id')[0].value.trim();
        const pw = document.getElementsByName('password')[0].value.trim();

        if(userId === ""){
            return alert('아이디를 입력해주세요.');
        }
        else if(pw === ""){
            return alert('비밀번호를 입력해주세요.');
        }

        axios.post("http://192.249.18.169:443/user/api-auth/login/",{
            username: userId,
            password: pw,
        })
        .then(function(response) {
            console.log(response);
            /*if(response.payload.loginSuccess){
                //
            }
            else{
                return alert("로그인 실패!");
            }*/
            
        })
        .catch(function(error) {
            console.log(error);
        });
    }



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
                            <td className='tableItem'><input type="text" name='id' placeholder='아이디를 입력해주세요'/></td>
                        </tr>
                        <tr>
                            <td className='tableItem'><p className='homeText'>비밀번호:</p></td>
                            <td className='tableItem'><input type="password" name='password' placeholder='비밀번호를 입력해주세요'/></td>
                        </tr>
                    </tbody>
                </table>
                   
                {/*<Link to='/Seats'>*/}
                    <button className='loginBtn' onClick={login}>로그인</button>
                {/*</Link>*/}
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