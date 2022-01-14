import React from "react";
import { Link } from "react-router-dom";

function SignUpBtn() {
    return(
        <Link to='/SignUp'>
            <button>회원가입</button>
        </Link>
    );
}

export default SignUpBtn;