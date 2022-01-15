import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../css/swiper.css";
import Header from "../header/Header.js"//
//import { Link } from 'react-router-dom' //링크로 연결할 떄 사용 예정

import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));


SwiperCore.use([EffectCoverflow, Pagination]);

function SwiperPage() { 
  const classes = useStyles();
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}  //아래에 현재 슬라이드 이미지 위치 표시하는 인디케이터
        paginationClickable={true} //인디케이터 클릭
        className="mySwiper"
      >
        <SwiperSlide>
            <Paper elevation={5} className={classes.paper}> 
                <Typography variant="body1">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
                </Typography>
                <Typography variant="h5" color="#FFFFFF" gutterBottom>
                    용산역아이파크몰
                </Typography>
                <Typography variant="body1">
                    주소
                </Typography>
                <Typography variant="body1">
                    전화번호
                </Typography>
                <Typography variant="body1">
                    자랑질
                </Typography>
            </Paper>
        </SwiperSlide>
        <SwiperSlide>
        <Paper elevation={5} className={classes.paper}> 
                <Typography variant="body1">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
                </Typography>
                <Typography variant="h5" color="#FFFFFF" gutterBottom>
                    천호
                </Typography>
                <Typography variant="body1">
                    주소
                </Typography>
                <Typography variant="body1">
                    전화번호
                </Typography>
                <Typography variant="body1">
                    자랑질
                </Typography>
            </Paper>
        </SwiperSlide>
        <SwiperSlide>
        <Paper elevation={5} className={classes.paper}> 
                <Typography variant="body1">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
                </Typography>
                <Typography variant="h5" color="#FFFFFF" gutterBottom>
                    왕십리
                </Typography>
                <Typography variant="body1">
                    주소
                </Typography>
                <Typography variant="body1">
                    전화번호
                </Typography>
                <Typography variant="body1">
                    자랑질
                </Typography>
            </Paper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperPage;