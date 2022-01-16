import React, {Component, useState, useEffect} from 'react';
import './profile.css'
import SingleReview from './SingleReview';
import { Header } from '../header/index.js';
import { useParams } from 'react-router-dom';


const Profile = (props) => {

    const nickName = useParams();
    console.log(nickName);

    const [ myReviewList, setMyReviewList ] = useState([]);

    useEffect(() => {
        setMyReviewList([{
                uuid: 1,
                reviewTitle: "용아맥 제일 앞줄"
            },
            {
                uuid: 2,
                reviewTitle: "뒷 줄 별로야"
            },
        ]);
    }, [ ])

    console.log(myReviewList);

    //const l = myReviewList.map((test)=> (<li>{test.reviewTitle}</li>));

    return (
        <div>
            <Header />
            <h2 className='profileTitle'>My Page</h2>
            <div className='myInfo'>
                <table className='myInfo-form'>
                    <tbody>
                        <tr>
                            <td className='profileTableItem'>아이디</td>
                            <td className='profileTableItem'>testID</td>
                        </tr>
                        <tr>
                            <td className='profileTableItem'>닉네임</td>
                            <td className='profileTableItem'>{nickName.nickName}</td>
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

/*class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            reviews: [
                {
                    uuid: 1,
                    reviewTitle: "용아맥 제일 앞줄"
                },
                {
                    uuid: 2,
                    reviewTitle: "뒷 줄 별로야"
                }
            ]
        }
    }


    render(){
        
        return (
            <div>
                <Header />
                <h2 className='profileTitle'>My Page</h2>
                <div className='myInfo'>
                    <table className='myInfo-form'>
                        <tbody>
                            <tr>
                                <td className='profileTableItem'>아이디</td>
                                <td className='profileTableItem'>testID</td>
                            </tr>
                            <tr>
                                <td className='profileTableItem'>닉네임</td>
                                <td className='profileTableItem'>Mynicnametest</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='myReview'>
                    <h3 className='profileTitle'>내가 쓴 리뷰</h3>
                    <div>
                        <ul id='myReviewList'>
                            {
                                this.state.reviews.map(review => {
                                    return <SingleReview key={review.uuid} review={review}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}*/

export default Profile;