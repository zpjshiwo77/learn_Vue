<template>
  <div class="nav">
    <nav>
      <router-link :to="'proShow'" :class="{'active':showAct}">
        <i class="icon-th"></i><br>
        <span>产品展示</span>
      </router-link>
      <router-link :to="'/'" :class="{'active':trfAct}">
        <i class="icon-shopping-cart"></i><br>
        <span>认购/转让</span>
      </router-link>
      <router-link :to="'/myPro'" :class="{'active':proAct}">
        <i class="icon-heart"></i><br>
        <span>我的产品</span>
      </router-link>
      <router-link :to="'/placard'" :class="{'active':ancAct}">
        <i class="icon-volume-up"></i><br>
        <span>公告</span>
      </router-link>
      <router-link :to="'/user'" v-bind:class="{'active':userAct}">
        <i class="icon-user"></i><br>
        <span>个人中心</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props:["showAct","trfAct","proAct","ancAct","userAct"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.2rem;
  border-top: 2px solid #ddd;
  text-align: center;
  background: #535353;
}
nav a{
  width: 20%;
  height: 100%;
  float: left;
  padding-top: 0.23rem;
}
nav a.active{
  background: #d89f3f;
}
nav a i{
  font-size: 0.45rem;
  color: #fff;
}
nav a span{
  font-size: 0.26rem;
  color: #fff;
}
</style>
