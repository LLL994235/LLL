<template>
  <div  class='w'>
      <div v-for="i in arr">
          <div id="writet">
           <p>楼市动向>{{i.tit}}</p>
          </div>
            <div class="main">
              <div class="ll ko" v-for="i in arr" >
                  <ul>
                      <li>发布者：网站管理员</li>
                      <li>发布时间：2018-01-11 10:35</li>
                      <li>分类：楼市动向</li>
                  </ul>
                  <div class="news-img">
                      <img :src="i.img2" alt="">
                  </div>
                  <p class="lplp">如果需要添加一条新的资讯，我们建议你复制本页资讯，然后更改分类。</p>
                  <a>応 损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩 忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙 怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑！恒！恓！恔恖恗恘恙恚恛恜恝恞恠恡恦，恧恫恬恮恰恱恲恴恷恹恺，恻恽恾恿悀悁悂悃悆悇悈悊。</a>
                   <a>応 损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩 忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙 怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑！恒！恓！恔恖恗恘恙恚恛恜恝恞恠恡恦，恧恫恬恮恰恱恲恴恷恹恺，恻恽恾恿悀悁悂悃悆悇悈悊。</a>
              </div>
                    <Righ></Righ>
              </div>
            </div>
    </div>
   <!--  <footer class="footer">
      <p>地产REALSTATE   2020 All Rights Reserved.</p>
    </footer> -->
  </div>
    
</template>
<script>
import Righ from "../components/Righ.vue";
export default {
  components: {
    Righ
  },
  name: "Detail",
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$http
      .post(
        "http://localhost:8000/lou",
        {
          id: this.$route.params.id
        },
        { emulateJSON: true }
      )
      .then(e => (this.arr = e.body));
  }
};
</script>
<style scoped>
.w{
  text-align:left;
}

#writet {
  padding-left: 80px;
  text-align:left;
  width: 100%;
  line-height: 70px;
  color: #000000;
  font-size: 13px;
  padding-left: 100px;
  box-sizing: border-box;
  background: #f4f4f4;
}
.main{
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.ll{
  width: 70%;
  margin-right: 3%;
  padding-left: 80px;
  float: left;
}
.right{
  width: 27%;
  float: left;
}
ul{
    display: block;
    width: 80%;
    height: 40px;
    background-color: #f4f4f4;
    overflow: hidden;
    line-height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
}
ul li{
    float: left;
    list-style: none;
    padding: 0 8%;
    font-size: 11px;
    color: #3a79e8;
    border-right: 1px dashed #ccc;
}
ul li:nth-of-type(3){
    border: none;
}
.news-img{
  width: 100%;
  height: auto;
  overflow: hidden;
  float:left;
}
.news-img>img{
  width: auto;
  height:auto;
}
.footer {
  width: 100%;
  line-height: 80px;
  color: #8d9095;
  text-align: center;
  font-size: 12px;
  margin-top: 80px;
  background-color: #262626;
  float: left;
}
.ko a{
    float: left;
    font-size: 11px;
    width: 80%;
    margin: 0 auto;
    display: block;
    color: #696969;
    text-indent: 20px;
    line-height: 17px;
    margin-bottom: 20px;
}
.ko a:last-child{
    margin-bottom: 85px;
}
.news-img{
    width: 80%;
    margin: 0 auto;
}

.lplp{
    font-size: 11px;
    color: #696969;
    line-height: 50px;
    text-indent: 20px;
    float: left;
}
</style>
