import React, {Component, useState, useEffect} from 'react';
import './profile.css'
import SingleReview from './SingleReview';
import { Header } from '../header/index.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Profile = (props) => {

    const nickName = useParams();
    console.log(nickName);

    const [ myReviewList, setMyReviewList ] = useState([]);

    useEffect(() => {
        /*setMyReviewList([{
                uuid: 1,
                reviewTitle: "용아맥 제일 앞줄"
            },
            {
                uuid: 2,
                reviewTitle: "뒷 줄 별로야"
            },
        ]);*/
        axios.get("http://192.249.18.169:443/reviews/mypage/")
        .then((response) => {
            setMyReviewList([...response.data]);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [ ])

    console.log(myReviewList);

    const user = sessionStorage.getItem("user_id");
    console.log(user);

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get("http://192.249.18.169:443/account/getUsers/")
        .then((response) => {
            setUserInfo([...response.data]);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [ ])



    

    return (
        <div>
            <Header />
            <h2 className='profileTitle'>My Page</h2>
            <div className='myInfo'>
                <table className='myInfo-form'>
                    <tbody>
                        <tr>
                            <td className='profileTableItem'>아이디</td>
                            <td className='profileTableItem'>{user}</td>
                        </tr>
                        <tr>
                            <td className='profileTableItem'>닉네임</td>
                            {
                                userInfo.map(item => {
                                    if(item.userID == user){
                                        return(<td className='profileTableItem'>{item.nickname}</td>)
                                    }
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='myReview'>
                <h3 className='profileTitle'>내가 쓴 리뷰</h3>
                <div>
                    <ul id='myReviewList'>
                        {
                            myReviewList.map((review, index) => {
                                return <SingleReview key={index} review={review}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Profile;