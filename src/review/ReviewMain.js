import React, {Component, useState, useEffect} from 'react';
import './reviewMain.css';
//import SingleComment from './SingleComment';
import { Header } from '../header/index.js';
import { useParams } from 'react-router-dom';
import axios from "axios";

const ReviewMain = () => {

    const reviewId = useParams();
    //console.log(reviewId);

    //const [comments, setComments] = useState([]);
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get("http://192.249.18.169:443/reviews/list/")
            .then((response) => {

                setContent([...response.data]);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
        });
    }, [ ])

    


    /*useEffect(() => {
        setComments([
            {
                uuid: 1,
                writer: "홍길동",
                date: "2022-01-13",
                content: "첫 번째 댓글"
            },
            {
                uuid: 2,
                writer: "크로플",
                date: "2022-01-14",
                content: "크로플 먹고 싶어요"
            },
        ])
    }, [ ])

    const addComment = () => {
        let value = document.querySelector('#newComment').value;
        setComments([...comments, {
            uuid: comments.length + 1,
            writer: '사용자 닉네임',
            date: new Date().toISOString().slice(0,10),
            content: value
        }]);
    }*/

    return (
        <div className='ReviewMain'>
            <Header />
            <br/>
            <div className='wrapTitle'>
                <div className='ReviewTitle'>
                    {
                        content.map(item => {
                            if(item.id == reviewId.reviewNo)
                            {
                                return(
                                    <div>
                                        <h1 className='reviewTitleText'>{ item.title }</h1>
                                        <br/>
                                        <p> { item.user_id } / {item.created_at.toString().slice(0,10)}</p>
                                    </div>
                                );
                            }
                        })
                        
                    }
                    
                </div>

                <div className='theaterInfo'>
                    {
                        content.map(item => {
                            if(item.id == reviewId.reviewNo)
                            {
                                return(
                                    <div>
                                        <p>{ item.theater }</p>
                                        <p>{item.seatX}행 {item.seatY}열</p>
                                    </div>
                                );
                            }
                        })
                    }
                    
                </div>
                
            </div>
            <br/>
            <div className='ReviewParagraph'>
                    {
                        content.map(item => {
                            if(item.id == reviewId.reviewNo)
                            {
                                return(
                                    <div>
                                        <p>{item.content}</p>
                                    </div>
                                );
                            }
                        })
                    }
                
            </div>
            <br/>
            {/*<div className='ReviewComments'>
                <h3 className='ReviewCommentsTitle'>Comments</h3>
                <div>
                    <div className='writeComment'>
                        <div className='nicknameComment'>닉네임</div>
                        <textarea id='newComment'></textarea>
                        <button id='addComment' onClick={addComment}>댓글 등록</button>
                    </div>
                    <ul id='commentList'>
                        {
                            comments.map(comment => {
                                return <SingleComment key={comment.uuid} comment={comment}/>
                            })
                        }

                    </ul>
                </div>
                    </div>*/}
        </div>
    );
};

export default ReviewMain;
