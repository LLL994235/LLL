<template>
  <div id="app">
    
      <div class="header">
        <span>REALSTATE地产，您居家置业最信赖的地产！</span>
        <div class="img">
          <img src="./images/2.gif" alt="">
          <img src="./images/3.gif" alt="">
          <img src="./images/4.gif" alt="">
          <img src="./images/1.gif" alt="">
        </div>
      </div>
      <div id="nav">
        <div class="left">
          <img src="./images/2.png" alt="">
        </div>
        <div class="con">
          <router-link to="/">首页</router-link>
          <router-link to="/about/1">全新楼盘</router-link>
          <router-link to="/about/2">二手楼盘</router-link>
          <router-link to="/about/3">全新商铺</router-link>
          <router-link to="/name">楼市动态</router-link>
          <router-link to="/we">联系我们</router-link>
        </div>
        <div class="right">
          <div><img src="./images/1.png" alt=""><span>008-6666 66666</span></div>
          <button>咨询电话</button>
        </div>
      </div>

    <router-view/>
    <div class="footer">
      地产REALSTATE  © 2020 All Rights Reserved.
    </div>
  </div>
</template>
