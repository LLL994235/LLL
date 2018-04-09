<template>
	<div>
		name:<input type="text" v-model='obj.name'><br>
		price:<input type="number" v-model='obj.price'><br>
		des:<input type="text" v-model='obj.des'><br>
		img:<input type="text" v-model='obj.img'><br>
		fenlei:<input type="number" v-model='obj.fenlei'><br>
		<button @click='sub'>提交</button>
	</div>
</template>
<script>
	
export default{
	data(){
		return{
			obj:{}
		}
	},
	methods:{
		sub(){
			this.$http.post('http://localhost:8082/add',this.obj,{emulateJSON:true}).then((e)=>{
			console.log('成功')
			})
		}
	}
}

</script>