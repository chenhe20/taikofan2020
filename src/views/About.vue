<template>
  <div class="about">
    <div class="authorBoard">
    <h1>by陈鹤</h1>
      <h1 class="don"><span style="color: #ea0e0e">Don!</span>&nbsp;<span style="color: #31d9cb">Ka!</span></h1>
    </div>
    <div class="log">
      <div class="versionInfo">
        <h3>Update info 2020-07-20</h3>
        <h5>Version-0.0.03 2020-07-20</h5>
        <ol>
          <li>Website icon changed</li>
          <li>You can choose video source now(great news for users who cannot play YouTube)</li>
          <li>Edit nginx.config, will not get 404 after refreshing pages(I hope XD)</li>
          <li>Modify some css attributes, like width and height, from px to %, I suppose the view performs better on mobile devices </li>
          <li>A bug is fixed: Now scroll listener can be removed normally after router-view changes(resolved by moving remove method from destroy() to beforeDestroy()) </li>
        </ol>
      </div>
      <div class="versionInfo">
      <h3>Update info 2020-07-18</h3>
      <h5>Version-0.0.02 2020-07-18</h5>
        <ol>
          <li>Taiko wears a mask.</li>
          <li>Add site title logo.</li>
          <li>Appearance changes in navigation bar and song list view.</li>
          <li>The server was closed on July 17th due to a tech issue, now the server ip address has changed.</li>
        </ol>
      </div>
      <div class="versionInfo">
        <h3>Update info 2020-07-16</h3>
        <h5>Version-0.0.01 2020-07-16</h5>
        <ol>
          <li>Taikofan's first web version released</li>
        </ol>
      </div>
    </div>
    <footer>
      <div class="footerLine"></div>
      <ul>
        <li><h4>E-mail:chnhechen@gmail.com</h4></li>
        <li><h4>QQ:1017367226</h4></li>
        <li><h4>Twitter:HeChen20</h4></li>
      </ul>
    <h1>Version-0.0.03 2020-07-20</h1>
    </footer>
  </div>
</template>
<style lang="scss">
  .log{
    display: table;
    margin: auto;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 200px;
    position: relative;
    li{
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      text-align: left;
    }
  }
  .authorBoard{
    margin: auto;
    width: 200px;
    height: 120px;
    transition: width 2s, height 2s, transform 2s;
    background-color: #fafdfd;
    border-radius: 20px;
    z-index: 100;
  }
  .don{
    display: block;
  }
  .versionInfo{
    margin-bottom: 50px;
    h3::before{
      width: 0;
      content: ('');
      border: solid #969494;
      height: 16px;
      margin-right: 1rem;
    }
  }
  .footerLine{
    position: relative;
    left: 50%;
    top:22px;
    transform: translateX(-50%);
    width:20%;
    height: 0;
    border: solid #bab8b8;
    border-bottom-width: 1px;
  }
  footer{
    ul {
      display: inline;
      li{
        text-align: center;
        line-height: 5px;
      }
    }
  }
</style>
