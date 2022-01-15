import React, {Component} from 'react';
import './signUp.css';
import { Header } from '../header/index.js';

class SignUp extends Component{
    constructor(props){
        super(props);
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
                                <td className='signupTableItem'><input className='submitInput' type='text' placeholder='사용할 아이디를 입력해주세요.'/></td>
                                <td className='signupTableItem'><button className='checkBtn'>중복 확인</button></td>
                            </tr>
                            <tr>
                                <td className='signupTableItem'>비밀번호</td>
                                <td className='signupTableItem'><input className='submitInput' type='text' placeholder='사용할 비밀번호를 입력해주세요.'/></td>
                                <td className='signupTableItem'></td>
                            </tr>
                            <tr>
                                <td className='signupTableItem'>비밀번호 확인</td>
                                <td className='signupTableItem'><input className='submitInput' type='text' placeholder='비밀번호를 입력해주세요.'/></td>
                                <td className='signupTableItem'><button className='checkBtn'>비밀번호 확인</button></td>
                            </tr>
                            <tr>
                                <td className='signupTableItem'>닉네임</td>
                                <td className='signupTableItem'><input className='submitInput' type='text' placeholder='사용할 닉네임을 입력해주세요.'/></td>
                                <td className='signupTableItem'><button className='checkBtn'>중복 확인</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className='submitBtn'>확인</button>
                </div>
            </div>
        )
    }
}

export default SignUp;