<template>
  <div class="scrollBox" id="cont">
    <ul class="contBox">
      <router-link :to="pro.href" v-for="pro in dealData">
        <li>
          <div class="icon">
            <span>{{pro.icon}}</span>
          </div>
          <div class="cont">
            <table>
              <tr>
                <td colspan=2>{{pro.Name}}</td>
              </tr>
              <tr>
                <td>编号：{{pro.Code}}</td>
                <td>{{pro.pWord}}</td>
                <td>{{pro.cWord}}</td>
              </tr>
              <tr>
                <td>{{pro.type}}</td>
                <td><span>{{pro.pShow}}</span></td>
                <td><span>{{pro.cShow}}</span></td>
              </tr>
            </table>
          </div>
          <div class="btn" v-if="pro.btnShow">
            立即<br>认购
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  props:["p_data"],
  computed:{
    dealData:function(){
      var that = this;
      var data = that.p_data;
      for (var i = 0; i < data.length; i++) {
        if(data[i].Type == 0){
          data[i].href = {name:'proDetail',params:{id:data[i].Id}};
          data[i].icon = "待";
          data[i].pWord = "发行价格";
          data[i].type = "待发行";
          data[i].btnShow = false;
          data[i].pShow = "--";
        }
        else if(data[i].Type == 1){
          data[i].href = {name:'proDetail',params:{id:data[i].Id}};
          data[i].icon = "发";
          data[i].pWord = "发行价格";
          data[i].type = "发行中";
          data[i].btnShow = true;
          data[i].pShow = data[i].OrginalPrice || "--";
        }
        else if(data[i].Type == 2){
          data[i].href = "#";
          data[i].icon = "通";
          data[i].pWord = "发行价格";
          data[i].type = "流通中";
          data[i].btnShow = true;
          data[i].pShow = data[i].Price || "--";
        }
        data[i].cShow = data[i].Chg || "--";
        data[i].cWord = data[i].Chg ? "涨跌" : "--";
      };
      return data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollBox{
  width: 100%;
  overflow: hidden;
}
.scrollBox .contBox{
  width: 100%;
  height: auto;
}
#cont{
  height: 100%;
}
#cont .contBox{
  padding-bottom: 1.2rem;
}
#cont .contBox a{
  width: 100%;
}
#cont .contBox li{
  width: 7.2rem;
  height: 1.7rem;
  margin: 0.15rem auto;
  background: #fff;
  border-radius: 0.05rem;
  box-shadow: 0px 0px 3px #ccc;
  position: relative;
}
#cont .contBox li .icon{
  float: left;
  width: 1.25rem;
  height: 1.25rem;
}
#cont .contBox li .icon span{
  display: block;
  margin: 0.35rem auto;
  border: 0.1rem solid #e6be7b;
  border-radius: 100%;
  width: 0.8rem;
  height: 0.8rem;
  color: #e6be7b;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.5rem;
  font-weight: bold;
}
#cont .contBox li .cont{
  float: left;
  height: 1.7rem;
  width: 5.9rem;
}
#cont .contBox li .btn{
  position: absolute;
  right: 0;
  top:0;
  height: 100%;
  width: 1.3rem;
  background: #c78c2b;
  color: #fff;
  font-size: 0.35rem;
  line-height: 1.5;
  text-align: center;
  padding-top: 0.35rem;
  box-sizing: border-box;
  border-radius: 0 0.05rem 0.05rem 0;
}
#cont .contBox li .cont table{
  width: 100%;
  height: 1.5rem;
  margin-top: 0.1rem;
}
#cont .contBox li .cont table tr td{
  color: #333333;
  line-height: 1.3;
}
#cont .contBox li .cont table tr:first-child td{
  padding-right: 0.1rem;
  font-weight: bold;
}
#cont .contBox li .cont table tr td:nth-child(1){
  width: 2.4rem;
}
#cont .contBox li .cont table tr td:nth-child(2){
  width: 2.3rem;
}
#cont .contBox li .cont table tr td:nth-child(3){
  text-align: center;
}
</style>
