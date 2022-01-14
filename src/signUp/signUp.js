import React, {Component} from 'react';
import './signUp.css'

class SignUp extends Component{
    constructor(props){
        super(props);
    }


    render(){
        
        return (
            <div>
                <h2>'Sight by Sight'에 오신 것을 환영합니다!</h2>
                <div className='newInfo'>
                    <table className='signUp-form'>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td><input type='text' placeholder='사용할 아이디를 입력해주세요.'/></td>
                                <td><button>중복 확인</button></td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td><input type='text' placeholder='사용할 비밀번호를 입력해주세요.'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>비밀번호 확인</td>
                                <td><input type='text' placeholder='비밀번호를 입력해주세요.'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>닉네임</td>
                                <td><input type='text' placeholder='사용할 닉네임을 입력해주세요.'/></td>
                                <td><button>중복 확인</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button>확인</button>
                </div>
            </div>
        )
    }
}

export default SignUp;