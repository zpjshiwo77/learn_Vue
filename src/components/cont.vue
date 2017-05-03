<template>
  <div class="myPullHtml">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cont'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.myPullHtml{
  width: 100%;
  height: auto;
}
.myPullHtml h1{
  width: 100%;
  text-align: center;
  line-height: 1.5;
  height: auto;
  color: #dba343;
  font-size: 0.4rem;
  letter-spacing: 0.05rem;
  font-weight: bold;
  padding: 0.15rem 0;
}
.myPullHtml h2{
  width: 100%;
  text-align: center;
  font-size: 0.34rem;
  color: #333;
  font-weight: bold;
  letter-spacing: 0.05rem;
  padding-bottom: 0.3rem;
}
.myPullHtml h3{
  width: 100%;
  font-size: 0.3rem;
  color: #333;
  font-weight: bold;
  padding: 0.1rem 0 0.2rem;
  box-sizing:border-box;
}
.myPullHtml .foot{
  text-align: center;
  padding-left: 5rem;
  text-indent: 0;
  font-weight: bold;
  font-size: 0.28rem;
}
.myPullHtml b{
  font-weight: bold;
}
.myPullHtml p{
  width: 100%;
  font-size: 0.26rem;
  color: #333333;
  line-height: 1.5;
  padding-bottom: 0.2rem;
  text-indent: 2em;
  box-sizing:border-box;
}
.indentN p{
  text-indent: 0;
}
.myPullHtml img{
  width: 100%;
}
</style>
