import React, { useState, useEffect, Component } from "react";
import { Header } from '../header/index.js';
import { Link, useParams } from 'react-router-dom';
import './reviewList.css';
import  Grid  from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import {Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import  Drawer  from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import "../css/seatreview.css";
import axios from "axios";

const useStyles = makeStyles({
    cardBack: {
        backgroundColor: '#CECEE4',
    }, 
});

const ReviewList = () => {

    const classes = useStyles();

    const seat = useParams();
    console.log(seat);

    const [reviewList, setReviewList] = useState([]);
    const [theaterInfo, setTheaterInfo] = useState([]);

    useEffect(() => {
        axios.get("http://192.249.18.169:443/theaters/")
            .then((response) => {

                setTheaterInfo([...response.data]);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
        });
    }, [ ])

    useEffect(() => {
        axios.get("http://192.249.18.169:443/reviews/list/")
            .then((response) => {
                setReviewList([...response.data]);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
        });
    }, [ ])




    /*useEffect(() => {
        setReviewList([
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
        ])
    }, [ ])*/

    return(
        <div>
            <div>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                    }}
                >
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        m: 3,
                        minWidth: { md: 350 },
                    }}
                    >
                    <div>
                        {
                            theaterInfo.map(item => {
                                if(item.id == seat.theaterId){
                                    return(<Box component="span" sx={{ color: '#6667AB', fontSize: 25, mt: 1 }}>
                                                {item.name} 
                                            </Box>)
                                }
                            })
                        }
                    </div>
                    <Box component="span" sx={{ fontSize: 22 }}>
                        의 {seat.theaterRow}행 {seat.theaterColumn}열 리뷰
                    </Box>
                    <Box
                        sx={{
                        mt: 1.5,
                        p: 0.5,
                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        borderRadius: '5px',
                        color: 'primary.main',
                        fontWeight: 'medium',
                        display: 'flex',
                        fontSize: 12,
                        alignItems: 'center',
                        '& svg': {
                            fontSize: 21,
                            mr: 0.5,
                        },
                        }}
                    >
                    </Box>
                    </Box>
                </Box>
            </div>
            <Container className="cardContainer">
                <Grid container spacing={3}>
                    {
                        reviewList.map(item => {
                            if(item.theater == "CGV 용산아이파크몰 IMAX관" && item.seatX == seat.theaterRow && item.seatY == seat.theaterColumn){
                                return(
                                    <Grid item key={item.id} xs={12} md={6} lg={4}>
                                        <div>
                                            <Card elevation={5} className={classes.cardBack} onClick={() => {
                                                window.location.href=`/ReadReview/${item.id}`;
                                            }}>
                                                <CardHeader className='cardTitle' title={item.title} color='#000000'/>
                                                <CardContent>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {item.content}
                                                    </Typography>
                                                    
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Grid>
                                )
                            }
                            
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default ReviewList;