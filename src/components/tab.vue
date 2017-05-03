<template>
  <ul class="list">
    <router-link :to="tab.href" :class="{'first':tab.first}"  v-for="tab in tabs">
      <li><i :class="tab.iclass"></i>{{tab.name}}<i class="icon-chevron-right"></i></li>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'tab',
  props:["tabs"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  height: auto;
  overflow: hidden;
}
ul a{
  width: 100%;
  background: #fff;
  float: left;
}
.first li{
  border-top: none;
}
ul li{
  margin: 0 auto;
  width: 90%;
  height: 0.8rem;
  border-top: 1px solid #ccc;
  font-size: 0.28rem;
  line-height: 0.8rem;
  padding-left: 0.5rem;
  box-sizing:border-box;
  position: relative;
}
ul li i{
  font-size: 0.3rem;
  text-align: center;
  color: #555;
}
ul li i:first-child{
  position: absolute;
  left: 0;
  top:0.25rem;
}
ul li i:last-child{
  position: absolute;
  right: 0;
  top:0.2rem;
}
</style>
