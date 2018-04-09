<template>
  <div class="about">
    <div class="ti">首页 > {{des}}</div>
    <div class="main">
    	<div class="l">
    		<div class="t"><div></div><div>{{aes}}</div></div>
			<Yang :b='a'></Yang>
    	</div>
    	
    		<Righ></Righ>
    	
    </div>
    
  </div>
</template>
<script>
import Righ from '@/components/Righ.vue'
import Yang from '@/components/Yang.vue'
	export default{
		data(){
			return{
				arr:[],
				des:' 全新楼盘',
				aes:'全新楼盘/ NEW APARTMENT',
				a:this.$route.params.id
			}
		},
		components: {
			Yang,
    		Righ
		},
		watch:{
			'$route'(){
				switch(this.$route.params.id){
					case '1':
					this.des='全新楼盘'
					this.aes='全新楼盘/ NEW APARTMENT'
					this.a=this.$route.params.id
					console.log(this.a)
					break;
					case '2':
					this.des='二手楼盘'
					this.aes='二手楼盘/ SECOND HAND'
					this.a=this.$route.params.id
					console.log(this.a)
					break;
					case '3':
					this.des='全新商铺'
					this.aes='全新商铺/ NEW SHOPS'
					this.a=this.$route.params.id
					console.log(this.a)
					break;
					default:
					console.log('sss')
					break ;
				}
			}
		}
	}
	
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
	}
	.main{
		padding:0 80px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	.main .l{
		width: 73%;
		height: auto;
		margin-bottom: 82px;
	}
	.main .r{
		width: 25%;
		height: auto;
		background: #f7f7f7;
	}
	.t{
		width: 100%;
		height: 54px;
		padding-top: 15px;
		box-sizing: border-box;
	}
	.t>div{
		float: left;
		/*margin-bottom: 20px;*/
	}
	.t>button{
		float: right;
		border: 1px solid #000;
		background: none;
	}
	.t>div:nth-of-type(1){
		width: 20px;
		height: 20px;
		background:#000;
	}
	.t>div:nth-of-type(2){
		width:250px;
		height: 20px;
		line-height: 20px;
		font-weight: bolder;
		font-size: 12px;
	}
</style>