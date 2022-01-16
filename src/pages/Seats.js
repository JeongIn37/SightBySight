import React, { useState, useEffect, Component } from "react";
import SwiperPage from './SwiperPage.js';
import { Header } from '../header/index.js';
import { Link } from 'react-router-dom';

class Seats extends Component { 
    constructor(props){
        super(props);
        this.dataList = {
            data: [
                {
                    id: 1,
                    title: "용산아이맥스 1번 글",
                    content: "내용 넣기 1번"
                },

                {
                    id: 2,
                    title: "용산아이맥스 2번 글",
                    content: "내용 넣기 2번"
                },

                {
                    id: 3,
                    title: "용산아이맥스 3번 글",
                    content: "내용 넣기 3번"
                }
            ]
        }

        this.theaterData = {theaterId: "1", theaterRow: "P", theaterColumn: "10"};
        console.log(this.theaterData.theaterName);
    }


    render(){

        return (
            <div>
            <Header />
            <SwiperPage />
            <p>용산 아이맥스</p>
            <table>
                <thead>
                    <tr>
                        <td>글 번호</td>
                        <td>글 제목</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.dataList.data.map(item => {
                            return(
                                <tr key={item.id}>
                                    <td>{ item.id }</td>
                                    <td>
                                        <Link to = {`/ReadReview/${item.id}`}>{item.title}</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }        
                </tbody>
            </table>
            
            <Link to={`/WriteReview/${this.theaterData.theaterId}/${this.theaterData.theaterRow}/${this.theaterData.theaterColumn}`}>
                <button>글쓰기</button>
            </Link>
            </div>
        )
    } 
}

export default Seats;