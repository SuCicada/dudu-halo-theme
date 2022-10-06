<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    <router-link to="/test">Go to About</router-link>-->
    <!--    <router-view/>-->
    <!--    <nav class="light-blue lighten-1" role="navigation">-->
    <!--      <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>-->
    <!--        <ul class="right hide-on-med-and-down">-->
    <!--          <li><a href="#">Navbar Link</a></li>-->
    <!--        </ul>-->

    <!--        <ul id="nav-mobile" class="sidenav">-->
    <!--          <li><a href="#">Navbar Link</a></li>-->
    <!--        </ul>-->
    <!--        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>-->
    <!--      </div>-->
    <!--    </nav>-->
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br><br>
        <h1 class="header center orange-text">Starter Template</h1>
        <div class="row center">
          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>
        <div class="row center">
          <a href="http://materializecss.com/getting-started.html" id="download-button"
             class="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br><br>

      </div>
    </div>


    <div class="container">
      <div class="section">

        <!--   Icon Section   -->
        <div class="row">
          <div v-for="card in cards">
            <div class="col s12 m6">
              <div class="post-card"
                   :style="{
        'background-image': `url(${require(card.img)})`,
      }"
              >
                <h2 class="center light-blue-text"><i class="material-icons">{{ card.title }}</i></h2>
                <h5 class="center">Speeds up development</h5>
                <p class="light">{{ card.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br><br>
    </div>

    <footer class="page-footer orange">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our
              full time job. Any amount would help support and continue development on this project and is greatly
              appreciated.</p>


          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Settings</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
              <li><a class="white-text" href="#!">Link 2</a></li>
              <li><a class="white-text" href="#!">Link 3</a></li>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
              <li><a class="white-text" href="#!">Link 2</a></li>
              <li><a class="white-text" href="#!">Link 3</a></li>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cards: [
        {
          title: 'nihoa',
          text: 'We did most of the heavy lifting for you to provide a default stylings that incorporate\n                  our custom components. Additionally, we refined animations and transitions to provide a smoother\n                  experience for developers.'
        },
        {title: 'flash_on', text: '我能吞下玻璃'},
        {title: '3', text: '名片sdf '},
        {title: '4', text: 'vji'},
      ]
    }
  }
}
</script>

<style>
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
  color: rgba(0, 0, 0, .87);
  background: #fff 50%;
  background-size: cover;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1);
}

.post-card .post-body {
  position: relative;
  margin: 0 auto;
  padding: 1.8rem 1.25rem;
  z-index: 2;
}

.post-card .post-categories {
  margin: 10px auto;
}

.post-card .post-categories .category {
  padding: 0 8px;
  color: hsla(0, 0%, 100%, .7) !important;
  font-size: .75rem;
  font-weight: 500;
}

.post-card a {
  color: #fff;
}

.post-card .post-title {
  height: 48px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.post-card .post-description {
  margin: 20px auto;
  max-width: 500px;
  height: 65px;
  max-height: 65px;
  font-size: 14px;
  color: hsla(0, 0%, 100%, .78) !important;
}

.post-card .read-more {
  height: 40px;
  margin: .6rem 1px;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 40px;
  color: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, .14), 0 3px 1px -2px rgba(244, 67, 54, .2), 0 1px 5px 0 rgba(244, 67, 54, .12);
}

.post-card .read-more .icon {
  font-size: 1.05rem;
  padding-right: 10px;
}

</style>
