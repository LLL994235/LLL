<template>
	
		<div class="lou" id="lou">
    				<p>{{p}}</p>
    				<span>- New Apartment -</span>
    				<dl v-for='i in arr'>
    				<router-link :to="'/detail/'+i.id">
    					<img :src="i.img" alt="">
    					<dt>{{i.name}}</dt>
    					<div class="dd">
    						<span>{{i.area}}</span> 
    						<span>{{i.des}}</span>
    						<span>{{i.price}}</span>
    					</div>
    					</router-link>
    				</dl>
    				<div>
    					<a href="">浏览更多{{p}}</a>
    				</div>
    	</div>
	
</template>
<script>
export default {
	props:{
		ff:String
	},
  data(){
  	return{
  		'arr':[],
  		p:''
  	}
  },
  created(){
  	if(this.ff==1.1){
  		this.p='全新楼盘'
  	}else if(this.ff==1.2){
  		this.p='二手楼盘'
  	}else{
  		this.p='全新商铺'
  	}
		this.$http.post('http://localhost:8000',{fenlei:this.ff},{emulateJSON:true}).then(function(e){
			this.arr=e.body;
		})
	
	}
}
</script>
<style scoped>
#lou{
	overflow: hidden!important;
}
.lou{
	overflow: hidden!important;
	/*margin-bottom: 82px;*/
}
a{
		text-decoration: none;
	}
	dt{
		color: #000 !important;
		margin-bottom: 15px;
		padding-left: 15px;
		text-align: left;
		font-weight: bolder;
	}
	.dd>span{
		height: 25px !important;
		display: block !important;
		color: black;
		text-align: left !important;
		font-size: 12px;
		text-decoration-line: none !important;
		padding-left: 15px;
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
		width: 106px;
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
