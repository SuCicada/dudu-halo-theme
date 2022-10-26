<template>
<!--qqqqqqqqqqqqqqq-->
  <div id="app">
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br><br>
        <!--        <h1 class="header center orange-text">Starter Template</h1>-->
        <!--        <div class="row center">-->
        <!--          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>-->
        <!--        </div>-->
        <div class="row center">
          <!--          <a href="http://materializecss.com/getting-started.html" id="download-button"-->
          <!--             class="btn-large waves-effect waves-light orange">Get Started</a>-->
          <video class="responsive-video" width="80%" height="" controls autoplay muted loop>
            <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
            <!--            <source src="movie.ogg" type="video/ogg">-->
            <!--            <source src="movie.webm" type="video/webm">-->
            <!--            <object data="https://www.runoob.com/try/demo_source/movie.mp4" width="320" height="240">-->
            <!--              <embed src="movie.swf" width="320" height="240">-->
            <!--            </object>-->
          </video>
        </div>
        <br><br>

      </div>
    </div>

    <swiper
      :slides-per-view=1
      :space-between=50
      :keyboard="{
        enabled: true,
        onlyInViewport: false,
      }"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="{
        enabled: true,
      }"
      :modules="modules"
      class="mySwiper"

      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="card_group in cards">
        <div class="container">
          <div class="section">
            <!--   Icon Section   -->
            <div class="row">
              <div v-for="card in card_group">
                <div class="col s12 m6">
                  <div class="post-card"
                       :style="{
                      'background-image': `url(${(card.img)})`,
                      }"
                  >
                    <!--                <img :src="card.img" alt=""/>-->
                    <!--                <span class="card-title">Card Title</span>-->
                    <h2 class="post-title">{{ card.title }}</h2>
                    <p>{{ card.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br><br>
        </div>
      </swiper-slide>
    </swiper>

    <a @click="click_a">click test</a>
    <!--    <test>nihao</test>-->
    <router-link to="/MyTest">Go to About</router-link>
  </div>

</template>

<script>
import {useRouter} from "vue-router";
import {group} from "../utils/util.ts";
import M from "materialize-css"

// swiper
import { Keyboard, Pagination, Navigation } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/vue';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/swiper.css"

export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter()
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      click_a() {
        router.push("/MyTest")
      },
      onSwiper,
      onSlideChange,
      modules: [Keyboard, Pagination, Navigation],
    }
  },
  created() {
    M.toast({html: 'I am a toast!', displayLength: 1000})
  },
  data() {
    let img = 'https://i.pinimg.com/originals/a1/20/ce/a120cef0ebee9dc3178213f89f725d6c.jpg'
    let cards = [
      {
        title: '甚么',
        text: '在以上实例中我们可以看到页面的背景颜色通过了很多的属性来控制。是地方',
        img: img
      },
      {
        title: 'flash_on', text: '我能吞下玻璃',
        img: img
      },
      {title: '3', text: '名片sdf ', img: img},
      {title: '4', text: 'vji', img: img},
      {title: '4', text: 'vji', img: img},
      {title: '4', text: 'vji', img: img},
      {title: '4', text: 'vji', img: img},
    ]
    cards = group(cards, 4)
    console.log(cards)
    return {cards: cards}
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*.post-card:before {*/
/*  position: absolute;*/
/*  z-index: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  display: block;*/
/*  left: 0;*/
/*  top: 0;*/
/*  content: "";*/
/*  background-color: rgba(0, 0, 0, .3);*/
/*  border-radius: 10px;*/
/*}*/

.post-card {
  position: relative;
  width: 100%;
  height: 300px;
  max-height: 300px;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
  border: 0;
  border-radius: 10px;
  background: #fff 50%;
  background-size: cover;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .7);
}

.post-card h2.post-title {
  height: 48px;
  /*margin: 10px auto;*/
  padding: 1.8rem 1.25rem;
  margin-top: 10px;
  margin-right: 5px;
  /*text-shadow: 0 15px 35px rgba(82, 82, 126, 0.7);*/

  text-shadow: rgba(0, 0, 0, .6) 1px 0 5px,
  rgba(0, 0, 0, .6) 0 1px 5px,
  rgba(0, 0, 0, .6) -1px 0 5px,
  rgba(0, 0, 0, .6) 0 -1px 5px;

  /* [font] */
  /*border-top: 20px ;*/
  /*position: absolute;*/
  /*top: 10px;*/
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 2.6em;
  text-align: right;
}

/*noformat*/
.post-card p {
  /*position: absolute;*/
  font-size: 25px;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;

  color: rgb(255, 255, 255);
  /*box-shadow: 0 15px 35px rgba(139, 139, 192 );*/
  line-height: 27px;
  background-color: rgba(255, 255, 255, 0.2);
  mix-blend-mode: difference;
  text-shadow: rgba(0, 0, 0, .6) 1px 0 5px,
  rgba(0, 0, 0, .6) 0 1px 5px,
  rgba(0, 0, 0, .6) -1px 0 5px,
  rgba(0, 0, 0, .6) 0 -1px 5px;
}


/*.post-card img {*/
/*  pointer-events: none;*/
/*  position: relative;*/
/*  !*width: 11;*!*/
/*  !*height: auto;*!*/
/*  !*z-index: -1;*!*/
/*  !*object-fit: cover;*!*/
/*}*/

/*.post-card .post-body {*/
/*  position: relative;*/
/*  margin: 0 auto;*/
/*  padding: 1.8rem 1.25rem;*/
/*  z-index: 2;*/
/*}*/

/*.post-card .post-categories {*/
/*  margin: 10px auto;*/
/*}*/

/*.post-card .post-categories .category {*/
/*  padding: 0 8px;*/
/*  color: hsla(0, 0%, 100%, .7) !important;*/
/*  font-size: .75rem;*/
/*  font-weight: 500;*/
/*}*/

/*.post-card a {*/
/*  color: #fff;*/
/*}*/

/*.post-card .post-title {*/
/*  height: 48px;*/
/*  margin-top: 10px;*/
/*  margin-bottom: 5px;*/
/*}*/

/*.post-card .post-description {*/
/*  margin: 20px auto;*/
/*  max-width: 500px;*/
/*  height: 65px;*/
/*  max-height: 65px;*/
/*  font-size: 14px;*/
/*  color: hsla(0, 0%, 100%, .78) !important;*/
/*}*/

/*.post-card .read-more {*/
/*  height: 40px;*/
/*  margin: .6rem 1px;*/
/*  font-size: 0.9rem;*/
/*  font-weight: 400;*/
/*  line-height: 40px;*/
/*  color: #fff;*/
/*  border-radius: 30px;*/
/*  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, .14), 0 3px 1px -2px rgba(244, 67, 54, .2), 0 1px 5px 0 rgba(244, 67, 54, .12);*/
/*}*/

/*.post-card .read-more .icon {*/
/*  font-size: 1.05rem;*/
/*  padding-right: 10px;*/
/*}*/

</style>
