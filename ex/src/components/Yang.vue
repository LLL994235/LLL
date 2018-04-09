<template>
	<div class="lou">
		<dl v-for='i in arr'>
		<router-link :to="/detail/+i.id">
			<img :src="i.img" alt="">
			<dt>{{i.name}}</dt>
			<div class="dd">
				<span>{{i.area}}</span> 
				<span>{{i.des}}</span>
				<span>{{i.price}}</span>
			</div>
		</router-link>
		</dl>

	</div>
</template>
<script>
	export default{
		props:{
			b:String
		},
		data(){
			return{
				arr:[],
			}
		},
		created(){
			console.log(this.b);
			this.$http.post('http://localhost:8000',{fenlei:'1.'+this.$route.params.id},{emulateJSON:true}).then(function(e){
				console.log('1.'+this.b)
			this.arr=e.body;
		})
		},
		watch:{
			'$route'(){
				console.log(this.b);
				this.$http.post('http://localhost:8000',{fenlei:'1.'+this.$route.params.id},{emulateJSON:true}).then(function(e){
					console.log('1.'+this.b)
				this.arr=e.body;
			})
			}
		}
		
		
	}
</script>
<style scoped>
a{
		text-decoration: none;
		text-align:left;
		color: #000;
	}
	.lou{
		overflow: hidden;
		margin-bottom: 50px;
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
	.lou>dl>a>img{
		width: 100%;
		height: 174px;
	}
	.lou>dl>a>dt{
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
	.lou>dl>a>div{
		width: 100%;
		text-align: left;
		padding-left: 20px;
		margin-bottom: 20px;
	}
	.lou>dl>a>div>span{
		display: block;
		box-sizing: border-box;
		font-size: 14px;
		color: #000;
		line-height: 24px;
	}
	.lou>a>div{
		width: 100%;
		height: 68px;
		float: left;
	}
	.lou>a>div>a{
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