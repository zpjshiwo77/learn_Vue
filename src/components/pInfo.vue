<template>
  <div>
    <h1 class="name">{{dealInfoName}}</h1>
    <div class="attr">
      <table>
        <tr>
          <td>{{dealInfoBoxA}}</td>
          <td>发行价格：</td>
        </tr>
        <tr>
          <td>{{dealInfoBoxB}}</td>
          <td>{{dealInfoIprize}}</td>
        </tr>
      </table>
      <div class="timeBox green" v-if="dealInfoTimeBoxShow">{{dealInfoBegTime}}</div>
    </div>
  </div>
</template>

<script>
import {dealDate} from '../../static/js/public/public.js'
export default {
  name: 'pInfo',
  props:["info"],
  computed:{
    dealInfoBegTime: function(){
      var time = "--";
      if(this.info.BegTime != null || this.info.BegTime != undefined){
        time = dealDate(this.info.BegTime);
      }
      return "发行时间：" + time;
    },
    dealInfoName:function(){
      var name = "--";
      if(this.info.Name != null || this.info.Name != undefined){
        name = this.info.Name+"("+this.info.Code+")"
      }
      return name;
    },
    dealInfoBoxA:function(){
      var boxA = "--";
      if(this.info.Code != null || this.info.Code != undefined){
        if(this.info.Type == 1){
          boxA = "发行数量："+this.info.OrginalStok+"("+this.info.Quantifier+")";
        }
        else if(this.info.Type == 0){
          boxA = "发行数量：";
        }
      }
      return boxA;
    },
    dealInfoBoxB:function(){
      var boxB = "--";
      if(this.info.Code != null || this.info.Code != undefined){
        if(this.info.Type == 1){
          boxB = "剩余数量："+this.info.Stock+"("+this.info.Quantifier+")";
        }
        else if(this.info.Type == 0){
          boxB = this.info.OrginalStok+"("+this.info.Quantifier+")";
        }
      }
      return boxB;
    },
    dealInfoIprize:function(){
      var iprice = "--";
      if(this.info.Price != null || this.info.Price != undefined){
        iprice = this.info.Price+"元/"+this.info.Quantifier;
      }
      return iprice;
    },
    dealInfoTimeBoxShow:function(){
      var show = false;
      if(this.info.Code != null || this.info.Code != undefined){
        if(this.info.Type == 1){
          show = false;
        }
        else if(this.info.Type == 0){
          show = true;
        }
      }
      return show;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  width: 100%;
  height: 1.1rem;
  text-align: center;
  line-height: 1.1rem;
  color: #dba343;
  font-size: 0.4rem;
  letter-spacing: 0.05rem;
  padding: 0.2rem 0;
}
h1.name{
  line-height: 1.5;
  height: auto;
}
.attr{
  width: 100%;
  height: auto;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #626262;
}
.attr table{
  width: 100%;
  color: #333333;
}
.attr table tr{
  width: 100%;
}
.attr table tr td{
  font-size: 0.28rem;
  line-height: 1.6;
}
.attr table tr td:first-child{
  width: 4.2rem;
}
.attr .timeBox{
  font-size: 0.26rem;
  line-height: 1.5;
}
</style>
