import React, {Component} from 'react';
import './reviewMain.css';
import SingleComment from './SingleComment';

class ReviewMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: [
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
                }
            ]
        }

        this.addComment = this.addComment.bind(this);
    }

    addComment(){
        let value = document.querySelector('#newComment').value;
        this.setState({comments: [...this.state.comments, {
            uuid: this.state.comments.length + 1,
            writer: '사용자 닉네임',
            date: new Date().toISOString().slice(0,10),
            content: value
        }]})
    }

    render(){
        
        return (
            <div className='ReviewMain'>
                <br/>
                <div className='ReviewTitle'>
                    <h2>Title Here</h2>
                </div>
                <br/>
                <div className='ReviewParagraph'>
                    <p>스파이더 맨 보고 왔습니다. 영화는 재미있는데, 자리가 너무 별로예요. (시력 2.0 2.0 입니다)</p>
                </div>
                <br/>
                <h3>Comments</h3>
                <div className='ReviewComments'>
                    <div>
                        <div>닉네임</div>
                        <div id='wirteComment'>
                            <textarea id='newComment'></textarea>
                            <button id='addComment' onClick={this.addComment}>댓글 등록</button>
                        </div>
                        <ul id='commentList'>
                            {
                                this.state.comments.map(comment => {
                                    return <SingleComment key={comment.uuid} comment={comment}/>
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewMain;