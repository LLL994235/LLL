<template>
  <div id="box">
  	<div class="ti">首页 > 楼市动态</div>
     <div id="lsdt-box">
       <div id="lsdt-box-left">
          <div class="ss">
            <span></span>
            楼市动向-News
          </div>
          <div v-for="i in arr" id="xian">
            <router-link :to="'/news/'+i.id">
                <dl>
                  <dt><img :src="i.img" alt=""></dt>
                  <dd>{{i.tit}}</dd><br>
                  <p class="shijian">{{i.time}}</p><br>
                  <div class="sdd">{{i.con}}</div>
                </dl>
            </router-link>
          </div>
        </div>
        <div id="lsdt-box-right">
          <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS9kODI5YzJiMjZiYjc0MmViNmQ1NWZiOTc4ZWEwODU4YS5qcGc_p_p100_p_3D.jpg" alt="">
        </div>
     </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$http.get("http://localhost:8000").then(e => {
      this.arr = e.body;
    });
  }
};
</script>


<style scoped>
.ti{
		width: 100%;
		height: 80px;
		background-color: #f7f7f7;
		line-height: 80px;
		text-align: left;
		padding-left: 80px;
		box-sizing: border-box;
		margin-bottom: 20px;
	}
.sdd{
	width: 70%;
	text-align: left;
	float: left;
	padding-left: 40px;
}
#lsdt-box{
  width: 100%;
  padding-left:80px; 
  overflow: hidden;
  text-align: left;
}
#lsdt-box-left{
  width: 48%;
  float: left;
}
#lsdt-box-left span{
  width: 15px;
  height: 15px;
  background-color: black;
  display: inline-block;
}
#lsdt-box-right{
  width: 50%;
  float: left;
}
#lsdt-box-right img{
  width: 100%;
  height: 600px ;
  display: block;
}
.ss{
  font-size: 12px;
  color: black;
  font-weight: bold;

}
#xian{
  overflow: hidden;
  margin-top: 25px;
}
#xian dl{
  overflow: hidden;
  line-height: 24px;
}
#xian dl div{
  margin-top: 4px;
  /* margin-left: 5px; */
  font-size: 10px;
  color: #999999;
}
#xian dt{
  float: left;
  overflow: hidden;
  margin-right: 5px;
}
#xian dt img{
  display: block;
}
#xian dd{
  /* margin-left: 5px; */
  display: inline-block;
}
.shijian{
	width: 70%;
	text-align: left;
	padding-left: 40px;
  float: left;
  color: #7379ec;
  font-size: 10px;
}
</style>
