import React, {Component} from 'react';
import './signUp.css';
import { Header } from '../header/index.js';
import axios from 'axios';
import { Link, Navigate, Redirect, useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

const SignUp = () => {

    const submitUserInfo = () => {
        const userId = document.getElementsByName('userId')[0].value.trim();
        const pw1 = document.getElementsByName('pw1')[0].value.trim();
        const pw2 = document.getElementsByName('pw2')[0].value.trim();
        const nickName = document.getElementsByName('nickName')[0].value.trim();

        if(userId === ""){
            return alert('사용할 아이디를 입력해주세요.');
        }
        else if(pw1 === ""){
            return alert('비밀번호를 입력해주세요.');
        }
        else if(pw2 === ""){
            return alert('비밀번호 확인을 위해 비밀번호를 한 번 더 입력해주세요.');
        }
        else if(nickName === ""){
            return alert('사용할 닉네임을 입력해주세요.');
        }

        if(pw1 === pw2){
            //save
        }
        else{
            return alert('비밀번호가 일치하지 않습니다.');
        }

        axios.post("http://192.249.18.169:443/user/signup/",{
            name: userId,
            password: pw2,
            nickname: nickName,
        })
        .then(function(response) {
            console.log(response);
            
            
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    return(
        <div className='signUpPage'>
            <Header />
            <h2 className='signUpTitle'>'Sight by Sight'에 오신 것을 환영합니다!</h2>
            <div className='newInfo'>
                <table className='signUp-form'>
                    <tbody>
                        <tr>
                            <td className='signupTableItem'>아이디</td>
                            <td className='signupTableItem'><input className='submitInput' type='text' name='userId' placeholder='사용할 아이디를 입력해주세요.'/></td>
                            <td className='signupTableItem'><button className='checkBtn'>중복 확인</button></td>
                        </tr>
                        <tr>
                            <td className='signupTableItem'>비밀번호</td>
                            <td className='signupTableItem'><input className='submitInput' type='password' name='pw1' placeholder='사용할 비밀번호를 입력해주세요.'/></td>
                            <td className='signupTableItem'></td>
                        </tr>
                        <tr>
                            <td className='signupTableItem'>비밀번호 확인</td>
                            <td className='signupTableItem'><input className='submitInput' type='password' name='pw2' placeholder='비밀번호를 입력해주세요.'/></td>
                            {/*<td className='signupTableItem'><button className='checkBtn'>비밀번호 확인</button></td>*/}
                        </tr>
                        <tr>
                            <td className='signupTableItem'>닉네임</td>
                            <td className='signupTableItem'><input className='submitInput' type='text' name='nickName' placeholder='사용할 닉네임을 입력해주세요.'/></td>
                            <td className='signupTableItem'><button className='checkBtn'>중복 확인</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button className='submitBtn' onClick={submitUserInfo}>확인</button>
            </div>
        </div>
    )
}

/*class SignUp extends Component{
    constructor(props){
        super(props);
    }

    submitUserInfo = async function(){
        const userId = document.getElementsByName('userId')[0].value.trim();
        const pw1 = document.getElementsByName('pw1')[0].value.trim();
        const pw2 = document.getElementsByName('pw2')[0].value.trim();
        const nickName = document.getElementsByName('nickName')[0].value.trim();

        if(userId === ""){
            return alert('사용할 아이디를 입력해주세요.');
        }
        else if(pw1 === ""){
            return alert('비밀번호를 입력해주세요.');
        }
        else if(pw2 === ""){
            return alert('비밀번호 확인을 위해 비밀번호를 한 번 더 입력해주세요.');
        }
        else if(nickName === ""){
            return alert('사용할 닉네임을 입력해주세요.');
        }
    }


    render(){
        
        return (
            <div className='signUpPage'>
                <Header />
                <h2 className='signUpTitle'>'Sight by Sight'에 오신 것을 환영합니다!</h2>
                <div className='newInfo'>
                    <table className='signUp-form'>
                        <tbody>
                            <tr>
                                <td className='signupTableItem'>아이디</td>
                                <td className='signupTableItem'><input className='submitInput' type='text' name='userId' placeholder='사용할 아이디를 입력해주세요.'/></td>
                                <td className='signupTableItem'><button className='checkBtn'>중복 확인</button></td>
                            </tr>
                            <tr>
                                <td className='signupTableItem'>비밀번호</td>
                                <td className='signupTableItem'><input className='submitInput' type='password' name='pw1' placeholder='사용할 비밀번호를 입력해주세요.'/></td>
                                <td className='signupTableItem'></td>
                            </tr>
                            <tr>
                                <td className='signupTableItem'>비밀번호 확인</td>
                                <td className='signupTableItem'><input className='submitInput' type='password' name='pw2' placeholder='비밀번호를 입력해주세요.'/></td>
                                <td className='signupTableItem'><button className='checkBtn'>비밀번호 확인</button></td>
                            </tr>
                            <tr>
                                <td className='signupTableItem'>닉네임</td>
                                <td className='signupTableItem'><input className='submitInput' type='text' name='nickName' placeholder='사용할 닉네임을 입력해주세요.'/></td>
                                <td className='signupTableItem'><button className='checkBtn'>중복 확인</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className='submitBtn' onClick={this.submitUserInfo}>확인</button>
                </div>
            </div>
        )
    }
}*/

export default SignUp;