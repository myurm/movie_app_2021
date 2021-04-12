import React from "react";
import PropTypes from "prop-types";

function Food(props) {
  return (
    <>
      <p>I like { props.name }</p>
      <p>{ rating }/5.0</p>
      <img src={ props.picture } alt={ props.name }/>
    </>
  )
}

const foodILike = [
  {
    id: 1,
    name: "Cold noodles",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDRfMjA2%2FMDAxNjA3MDQwMjg5NDc5.S73zrjhI1gtWreh4bBr_ZLTWgGLeoLgs1waBBEM4yqcg.VHC-6-aoxdNMzhT3D3hJioDKwpf64fs7igOeKPA_dJgg.JPEG.keh4560%2FDSC08532.JPG&type=l340_165",
    rating: 5
  },
  {
    id: 2,
    name: "Kimchi",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjVfNCAg%2FMDAxNjE2NjI4OTI1NTU1.v-MI19peGnncgwviCprdnyJD0lPfGEECOEqh525BMHQg.xenozKFAqsP2eqqYNCMQwgs6gXZ2UFCgvL0WCco4FvMg.JPEG.daeho7238%2F%25C4%25B8%25C3%25B3.PNG&type=a340",
    rating: 4.9
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMjZfMTQ2%2FMDAxNjExNjUxOTYwOTU3.gc3hBmRHHM3P-ISiHZ5c0f6F2UGQew_9lKfhrmwCpz8g.2-D9_oWcXA1rgPZHvckzhOLtt0__lZBbAKqqFATNmLog.JPEG.kimmango6701%2FIMG_1979.JPG&type=a340",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMjNfMTMw%2FMDAxNjExMzQ5MjYzMDg3.NUJZaa4zGzhycAcI0zdcGhGSbrazWDHH2j8ar6AbOlQg.szaTR_n_FLZ3m5gdkkz0yppaz95ihl4eJYq25B7FPoEg.JPEG.9754bsj%2FSE-108e94b6-5cf3-11eb-9ff9-87d44eb645b1.jpg&type=a340",
    rating: 4.7
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMzBfMTg2%2FMDAxNjEyMDE1NDQ5NDk3.3SGgEC93oZFgsG6ulPXWYgVfr5KCBJ_AmDycuGo_41cg.gvrql_mQk5Mliy1dXrInYV8RuYw4Z3IbumHDnsbDWv4g.JPEG.lovesaypoi%2F20210129%25A3%25DF200425.jpg&type=a340",
    rating: 4.6
  }
];

// function renderFood(dish) {
//   return <Food name={ dish.name } picture={ dish.image } />;
// }
// const renderFood = dish => <Food name={ dish.name } picture={ dish.image } />; 화살표 함수

function App() {
  return (
    <>
      <div>{foodILike.map(dish => (<Food key={ dish.id } name={ dish.name } picture={ dish.image } rating={ dish.rating } />))}</div>
    </>
  )
}

export default App;