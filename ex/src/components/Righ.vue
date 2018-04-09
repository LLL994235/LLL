<template>
	<div class="rr">
		<div></div><div>楼市动向-NEWS</div><button>阅读更多</button>
		<p v-for='i in this.arr'>
			<span>{{i.tit}}</span>
			<span>{{i.con}}</span>
		</p>
	</div>
</template>
<style>
	.rr{
		width: 25%!important;
		height:260px!important;
		padding: 15px!important!important;
		box-sizing: border-box!important;
		background: #f7f7f7;
		margin-bottom: 20px;
	}
	.rr>div{
		float: left;
		/*margin-bottom: 20px;*/
	}
	.rr>button{
		float: right;
		border: 1px solid #000;
		background: none;
	}
	.rr>div:nth-of-type(1){
		width: 20px;
		height: 20px;
		background:#000;
	}
	.rr>div:nth-of-type(2){
		width:100px;
		height: 20px;
		line-height: 20px;
		font-weight: bolder;
		font-size: 12px;
	}
	.rr>p{
		float: left;
		width: 100%;
		height: 20px;
		color: #ccc;
		font-size: 14px;
		text-align: left;
	}
	.rr>p>span:nth-of-type(odd){
		color:#000;
		font-size: 12px;
	}
	.rr>p>span{
		display: block;
		width: 100%;
		height:20px;
	}
</style>
<script>
	export default{
		data(){
			return{
				arr:[]
			}
		},
		created(){
			this.$http.get('http://localhost:8000').then(function(e){
				this.arr=e.body;
			})
		}
	}
</script>