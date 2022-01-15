import React, {Component} from 'react';
import './profile.css'
import SingleReview from './SingleReview';
import { Header } from '../header/index.js';

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
}

export default Profile;