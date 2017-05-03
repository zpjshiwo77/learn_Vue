<template>
  <div class='cont'>
    <ititle title="产品详情"></ititle>
    <pInfo :info="product"></pInfo>
    <h1>商 品 简 介</h1>
    <cont v-html="product.Content"></cont>
    <div class="ibtn" v-if="product.btnShow">立即认购</div>
  </div>
</template>
<script>
import {iAjax,domainUrl} from '../../static/js/public/public.js'
import pInfo from '@/components/pInfo'
import ititle from '@/components/title'
import cont from '@/components/cont'

export default {
  name: 'index',
  data () {
    return {
      domainurl:domainUrl(),
      product:{}
    }
  },
  methods:{
    getDatas:function(){
      var that = this;
      var id = this.$route.params.id;
      iAjax(this.domainurl+"/Commodity/GetSingleCommodity",{Id:id},function(data){
        that.product = data;
        that.product.btnShow = that.product.Type == 1 ? true : false;
      },true);
    }
  },
  created (){
    this.getDatas();
  },
  components : {
      pInfo,
      ititle,
      cont
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cont{
  padding-bottom: 1.2rem;
  padding-top: 0.7rem;
  width: 6.5rem!important;
  margin: 0 auto;
}
h1 {
    width: 100%;
    height: 1.1rem;
    text-align: center;
    line-height: 1.1rem;
    color: #dba343;
    font-size: 0.4rem;
    letter-spacing: 0.05rem;
    padding: 0.2rem 0;
}
</style>
