import React, {Component} from 'react';
import './writeReview.css';
import { Header } from '../header/index.js';

class WriteReview extends Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className='WriteReviewMain'>
                <Header />
                <br/>
                <div className='titleWrap'>
                    <input type='text' className='WriteReviewTitle' placeholder='제목을 입력해주세요.'/>
                </div>
                <div className='theaterInfo'>
                    <p>영화관 이름</p>
                    <p>자리 정보</p>
                </div>
                <br/>
                <div className='WriteReviewParagraph'>
                    <textarea className='ReviewWritingArea'></textarea>
                </div>
                <br/>
                <button>등록</button>
            </div>
        )
    }
}

export default WriteReview;