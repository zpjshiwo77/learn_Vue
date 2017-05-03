<template>
  <div>
    <navs :trfAct = 'true' ></navs>
    <list :p_data = 'proList'></list>
  </div>
</template>
<script>
import {iAjax,domainUrl} from '../../static/js/public/public.js'
import list from '@/components/list'
import navs from '@/components/nav'

export default {
  name: 'index',
  data () {
    return {
      domainurl:domainUrl(),
      proList:[]
    }
  },
  methods:{
    getDatas:function(){
      var that = this;
      iAjax(this.domainurl+"/Commodity/GetCommodities",{v:Math.random()},function(data){
        that.proList = data;
      },true);
    }
  },
  created (){
    this.getDatas();
  },
  components : {
      list,
      navs 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
