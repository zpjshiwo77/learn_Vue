<template>
  <div class="title"><a href="javascript:history.go(-1);"><i class="icon-chevron-left"></i></a><span>{{title}}</span></div>
</template>

<script>
export default {
  name: 'header',
  props:["title"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 0.7rem;
  background: #c78c2b;
  text-align: center;
}
.title a{
  position: absolute;
  top:0;
  left: 0;
}
.title i{
  font-size: 0.4rem;
  color: #fff;
  float: left;
  padding: 0.15rem 0.3rem;
}
.title span{
  font-size: 0.35rem;
  color: #fff;
  position: relative;
  top:0.175rem;
}
</style>
