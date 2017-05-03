<template>
  <div class="cont">
    <router-link :to="'/showDetail?id='+pro.id" class="block" v-for="pro in pros">
        <img :src="pro.img">
        <p class="name">{{pro.name}}</p>
        <p class="price">{{pro.price}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'showList',
  props:["pros"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cont{
  overflow: hidden;
}
.block{
  float: left;
  width: 3.5rem;
  height: 3.5rem;
  background: #fff;
  box-shadow: 3px 3px 3px #ddd;
  margin: 0.16rem 0.16rem 0;
  position: relative;
}
.block:nth-child(2n){
  margin-left: 0;
}
.block img{
  width: 3.5rem;
  height: 2.5rem;
}
.block p.name{
  line-height: 1.7;
  padding: 0.1rem;
}
.block p.price{
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 3.5rem;
  height: auto;
  text-align: right;
  padding: 0.05rem 0.1rem;
  font-size: 0.18rem;
  line-height: 1.2;
  background: #eee;
  color: rgb(166,166,166);
}
</style>
