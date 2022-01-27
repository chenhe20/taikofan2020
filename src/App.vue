<template>
  <div id="app">
    <div id="nav">
      <navigation-bar></navigation-bar>
      <div id="siteTitleContainer">
        <SiteTitle id="siteTitle"></SiteTitle>
      </div>
    </div>
    <a id="appLogo"></a>
    <div id="viewーcontent">
      <router-view></router-view>
      <el-backtop></el-backtop>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: scroll;
  background-color: whitesmoke;
}

#nav {
  padding: 40px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#viewーcontent{
  margin-top: 5px;
  background-color: whitesmoke;
  background-attachment: fixed;
}

#appLogo{
  width: 200px;
  height: 200px;
  background-image: url("./assets/taikoLogo.png");
  background-repeat:no-repeat;
  background-position: center;
  background-size: 300px 200px;
  position: absolute;
  left:72%;
  top:10%;
  z-index: 100;
}
#appLogo:hover{
  animation:taikoMove 1s;
  -webkit-animation:taikoMove 1s; /* Safari and Chrome */
}
@-webkit-keyframes taikoMove /* Safari and Chrome */
{
  25%{left:1140px}
  30% {background-image: url("./assets/taikoLogo_2.png");}
  75%{left:1160px}
}
#siteTitleContainer{
  float: right;
  width: 460px;
  margin-right: 220px;
  position: relative;
  bottom: 60px;
}

</style>

<script>
import SiteTitle from './components/SiteTitle'
import NavigationBar from './components/NavigationBar'
import Vue from 'vue'
Vue.component('navigation-bar', NavigationBar)
Vue.component('SiteTitle', SiteTitle)

export default {
}
</script>
