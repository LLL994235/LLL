<template>
	<div class="lou">
		<dl v-for='i in arr'>
			<img :src="i.img" alt="">
			<dt>{{i.name}}</dt>
			<div class="dd">
				<span>{{i.area}}</span> 
				<span>{{i.des}}</span>
				<span>{{i.price}}</span>
			</div>
		</dl>
	</div>
</template>
<style scoped>
	
	dl{
		width: 33.03%;
		height: auto;
		overflow: hidden;
		float: left;
		margin-right:0.3%;
		background-color: white;
		margin-bottom: 20px;
	}
	dl>img{
		width: 100%;
		height: 174px;
	}
	dl>dt{
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
	dl>div{
		width: 100%;
		text-align: left;
		padding-left: 20px;
		margin-bottom: 20px;
	}
	dl>div>span{
		display: block;
		box-sizing: border-box;
		font-size: 14px;
		color: #000;
		line-height: 24px;
	}
	div{
		width: 100%;
		height: 68px;
		float: left;
	}
	div>a{
		display: block;
		margin: 0 auto;
		width: 86px;
		border: 1px solid rgb(58, 121, 232);
		padding:10px 25px;
		font-size: 12px;
		text-decoration: none;
		color: #000;
	}
	div>a:hover.lou>div{
		border: 1px solid #ccc;
	}
</style>
<script>
export default{
	data(){
  	return{
  		'arr':[]
  	}
  },
	created(){
		this.$http.post('http://localhost:8000',{fenlei:'1.1'},{emulateJSON:true}).then(function(e){
			this.arr=e.body;
		})
	}
}
  
</script>