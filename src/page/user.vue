<template>
  <div  class="scroll">
    <div class="myInfo">
      <img :src="iInfo.headImg" class="head">
        <table>
          <tr>
            <td>{{iInfo.name}}</td>
            <td>总资产</td>
            <td rowspan="2"><router-link :to="'#'" class="ibtn">充值</router-link></td>
          </tr>
          <tr>
            <td><span class="blue">{{iInfo.id}}</span></td>
            <td><span class="red">{{iInfo.money}}</span></td>
          </tr>
          <tr>
            <td>{{iInfo.regDate}}</td>
            <td colspan="2">推荐人 <span class="blue">{{iInfo.sid}}</span></td>
          </tr>
        </table>
    </div>
    <info :infos = 'infos'></info>
    <tab :tabs = 'tabs'></tab>
    <a href="#" class="first">
      <div class="block"><i class="icon-off red"></i>退出登录</div>
    </a>
    <navs :userAct = 'true' ></navs>
  </div>
</template>
<script>
import navs from '@/components/nav'
import tab from '@/components/tab'
import info from '@/components/info'
export default {
  name: 'index',
  data () {
    return {
      iInfo:{
        name:"张三",
        id:123456789,
        sid:987654321,
        money:88888,
        regDate:"2017-4-1",
        headImg:"http://www.seventh77.com/view/food/img/head.jpg"
      },
      tabs:[{
        "href":"#",
        "first":true,
        "iclass":{
          "icon-user":true,
        },
        "name":"个人信息"
      },{
        "href":"#",
        "first":false,
        "iclass":{
          "icon-tablet":true,
          "purple":true
        },
        "name":"我的手机"
      },{
        "href":"#",
        "first":false,
        "iclass":{
          "icon-map-marker":true,
          "purple":true
        },
        "name":"我的地址"
      },{
        "href":"#",
        "first":true,
        "iclass":{
          "icon-credit-card":true
        },
        "name":"充值"
      },{
        "href":"#",
        "first":false,
        "iclass":{
          "icon-money":true,
          "gold":true
        },
        "name":"提现"
      },{
        "href":"#",
        "first":false,
        "iclass":{
          "icon-credit-card":true,
          "blue":true
        },
        "name":"我的银行卡"
      },{
        "href":"#",
        "first":true,
        "iclass":{
          "icon-list-alt":true,
          "gold":true
        },
        "name":"资金明细"
      },{
        "href":"#",
        "first":false,
        "iclass":{
          "icon-list-alt":true,
          "gold":true
        },
        "name":"佣金明细"
      },{
        "href":"#",
        "first":false,
        "iclass":{
          "icon-list-alt":true,
          "gold":true
        },
        "name":"异常单据"
      }],
      infos:[{
        name:"资金余额",
        val:0,
        iclass:{
          "red":false,
          "green":false
        }
      },{
        name:"资金可取",
        val:0,
        iclass:{
          "red":false,
          "green":false
        }
      },{
        name:"产品市值",
        val:0,
        iclass:{
          "red":false,
          "green":false
        }
      },{
        name:"积分",
        val:0,
        iclass:{
          "red":false,
          "green":false
        }
      },]
    }
  },
  components : {
      tab,
      navs,
      info
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myInfo{
  width: 100%;
  height: auto;
  padding: 0.2rem;
  background: #fff;
  overflow: hidden;
}
.myInfo img{
  width: 1.2rem;
  height: 1.2rem;
  margin-top: .15rem;
  border: 0.05rem solid #d89f3f;
  border-radius: 100%;
  float: left;
}
.myInfo table{
  width: 6rem;
  float: right;
  height: auto;
}
.myInfo table tr{
  width: 100%;
  height: auto;
}
.myInfo table td{
  width: 33%;
  height: 0.5rem;
  font-size: 0.26rem;
  line-height: 1.3;
}
.myInfo table td span{
  font-size: 0.26rem;
}
.ibtn{
  font-size: 0.26rem;
  color: #fff;
  padding: 0.15rem 0.4rem;
  width: 0.6rem;
  border-radius: 0.1rem;
  background: rgb(220,47,53);
}
.ibtn:visited {
    color: #fff;
}
.scroll{
  padding-bottom: 1.2rem;
}
a{
  width: 100%;
  background: #fff;
  float: left;
}
a .block{
  margin: 0 auto;
  width: 90%;
  height: 0.8rem;
  font-size: 0.28rem;
  line-height: 0.8rem;
  padding-left: 0.5rem;
  box-sizing:border-box;
  position: relative;
}
a .block i{
  font-size: 0.3rem;
  text-align: center;
  color: #555;
}
a .block i:first-child{
  position: absolute;
  left: 0;
  top:0.25rem;
}
</style>
