import React, {Component} from 'react';
import './profile.css'
import SingleReview from './SingleReview';

class Profile extends Component{
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
                <h2>My Page</h2>
                <div className='myInfo'>
                    <table className='myInfo-form'>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td>testID</td>
                            </tr>
                            <tr>
                                <td>닉네임</td>
                                <td>Mynicnametest</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='myReview'>
                    <h3>내가 쓴 리뷰</h3>
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
}

export default Profile;