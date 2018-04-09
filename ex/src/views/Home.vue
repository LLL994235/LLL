<template>
  <div class="home">

    <div class="banner">
	    <div>
	    	<img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS84MzY4MTYwYTk5NWQ4OTg4YWNmNmM5NjIxYWJiYzg5My0xODAweDYwMC5qcGc_p_p100_p_3D.jpg" alt="">
	    </div>
    </div>
    <div class="main_bg">
    	<div class="main">
    		<div class="l">
    			<div class="top">
    				<img  v-for="i in arr" :src="i.img" alt="" :id='i.id'>
    			</div>
    			<Top ff='1.1'></Top>
    			<Top ff='1.2'></Top>
    			<Top ff='1.3'></Top>
    		</div>
    		<Righ></Righ>
    		<div class="sss">
    			<div></div><div>联系我们 - CONTACT</div>
    			<p>
    				<span>Tom</span>
    				<span>188 0000 0000  /  008-6666 6666</span>
    			</p>
    			<p>
    				<span>Tom</span>
    				<span>188 0000 0000  /  008-6666 6666</span>
    			</p>
    			<p>
    				<span>Tom</span>
    				<span>188 0000 0000  /  008-6666 6666</span>
    			</p>
    			<p>
    				<span>Tom</span>
    				<span>188 0000 0000  /  008-6666 6666</span>
    			</p>
    		</div>
    		<div class="ddd">
    			<div></div><div>在线表单 - FORM</div>
				<input type="text" placeholder="称呼">
				<input type="text" placeholder="邮箱">
				<input type="text" placeholder="电话">
				<input type="text" placeholder="内容">
				<input type="text" placeholder="验证码">
				<button>提交</button>
    		</div>
    		<div class="fff">
    			<div></div><div>地址 - ADDRESS</div>
    			<p>郵箱：info@realestate.com</p>
    			<p>地址：上海市静安区南京西路时代大厦</p>
    		</div>
    	</div>
    </div>
    
  </div>
</template>

<script>  
import HelloWorld from '@/components/HelloWorld.vue'
import Top from '@/components/Top.vue'
import Righ from '@/components/Righ.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Top,
    Righ
  },
  data(){
  	return{
  		arr:[],
  	}
  },
  created(){
		this.$http.post('http://localhost:8000',{fenlei:'1'},{emulateJSON:true}).then(function(e){
			this.arr=e.body;
		})
	},
}
</script>
<style scoped>
	.l{
		margin-bottom: 82px;
	}
	.ddd{
		width: 274px;
		position: absolute;
		height: 400px;
		background: #f7f7f7;
		right: 125px;
		top: 1480px;
		padding:20px;
		box-sizing: border-box;
	}
	.ddd>div{
		float: left;
	}
	.ddd>div:nth-of-type(1){
		width: 20px;
		height: 20px;
		background:#000;
	}
	.ddd>div:nth-of-type(2){
		width:150px;
		height: 20px;
		line-height: 20px;
		font-weight: bolder;
		font-size: 12px;
	}
	.ddd>input{
		width: 100%;
		height: 40px;
		outline: none;
		border:none;
		border-bottom:1px solid #ccc;
		background: none;
	}
	.ddd>button{
		width: 130px;
		height: 35px;
		background-color: #333;
		border: none;
		margin-top: 20px;
		float: left;
		color: white;
	}
	.fff{
		width: 274px;
		position: absolute;
		height: 130px;
		background: #f7f7f7;
		right: 125px;
		top: 1910px;
		padding:20px;
		box-sizing: border-box;
	}
	.fff>div{
		float: left;
	}
	.fff>div:nth-of-type(1){
		width: 20px;
		height: 20px;
		background:#000;
	}
	.fff>div:nth-of-type(2){
		width:150px;
		height: 20px;
		line-height: 20px;
		font-weight: bolder;
		font-size: 12px;
	}
	.fff>p{
		width: 100%;
		height: 16px;
		font-size: 12px;
		color:black;
		line-height: 16px;
		float: left;
		text-align: left;
	}
	.sss{
		width: 274px;
		position: absolute;
		height: 300px;
		background: #f7f7f7;
		right: 125px;
		top: 1150px;
		padding:20px;
		box-sizing: border-box;
	}
	.sss>div{
		float: left;
	}
	.sss>div:nth-of-type(1){
		width: 20px;
		height: 20px;
		background:#000;
	}
	.sss>div:nth-of-type(2){
		width:150px;
		height: 20px;
		line-height: 20px;
		font-weight: bolder;
		font-size: 12px;
	}
	.sss>p{
		float: left;
		width: 100%;
		height: 30px;
		color: blue;
		font-size: 14px;
		text-align: left;
	}
	.sss>p>span:nth-of-type(odd){
		color:#000;
		font-size: 14px;
		font-weight: bolder;
	}
	.sss>p>span{
		display: block;
		width: 100%;
		height:20px;
	}
	.banner{
		width: 100%;
		height: 660px;
	}
	.banner>div{
		width: 1300px;
		height: 600px;
		overflow: hidden;
		margin:0 auto;
	}
	.main_bg{
		width: 100%;
		height: auto;
		padding-top: 40px;
		padding-left: 80px;
		padding-right: 80px;
		box-sizing: border-box;
	}
	.main{
		padding:0 40px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;

	}
	.main .l{
		width: 73%;
		height: auto;
	}
	.main .r{
		width: 25%;
		height: auto;
		background: #f7f7f7;
	}
	.l>.top{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom:30px;
	}
	.l>.top>img{
		width: 49%;
		margin-right: 1%;
		margin-bottom: 10px;
	}
	.lou{
		width: 99%;
		height: auto;
		margin-right: 1%;
		border: 1px solid rgba(226,226,226,1);
		color: #000000;
		overflow: hideen;
		float: left;
		background: #f7f7f7;
	}
	.lou>p{
		width: 100%;
		height: 25px;
		padding-top: 20px;
		box-sizing: border-box;
		text-align: center;
		font-size: 22px;
		color: #000;
		font-weight: border;
	}
	.lou>span{
		display: block;
		width: 100%;
		height: 15px;
		font-size: 14px;
		color: #666;
		margin-bottom: 20px;
	}
	.lou>dl{
		width: 33.03%;
		height: auto;
		overflow: hidden;
		float: left;
		margin-right:0.3%;
		background-color: white;
		margin-bottom: 20px;
	}
	.lou>dl>img{
		width: 100%;
		height: 174px;
	}
	.lou>dl>dt{
		text-align: left;
		padding-left: 20px;
		box-sizing: border-box;
		width: 100%;
		font-weight: bolder;
		font-size: 16px;
		color: #000;
		margin-bottom: 20px;
		line-height: 30px;
	}
	.lou>dl>div{
		width: 100%;
		text-align: left;
		padding-left: 20px;
		margin-bottom: 20px;
	}
	.lou>dl>div>span{
		display: block;
		box-sizing: border-box;
		font-size: 14px;
		color: #000;
		line-height: 24px;
	}
	.lou>div{
		width: 100%;
		height: 68px;
		float: left;
	}
	.lou>div>a{
		display: block;
		margin: 0 auto;
		width: 86px;
		border: 1px solid rgb(58, 121, 232);
		padding:10px 25px;
		font-size: 12px;
		text-decoration: none;
		color: #000;
	}
	.lou>div>a:hover.lou>div{
		border: 1px solid #ccc;
	}
</style>
		
