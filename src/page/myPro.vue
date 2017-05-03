<template>
  <div>
    <tab :tabs = 'tabs'></tab>
    <navs :proAct = 'true' ></navs>
  </div>
</template>
<script>
import navs from '@/components/nav'
import tab from '@/components/tab'
export default {
  name: 'index',
  data () {
    return {
      tabs:[{
        "href":"#",
        "first":true,
        "iclass":{
          "icon-star":true,
          "red":true
        },
        "name":"我的产品"
      },{
        "href":"#",
        "first":true,
        "iclass":{
          "icon-shopping-cart":true,
          "blue":true
        },
        "name":"认购查询"
      },{
        "href":"#",
        "first":false,
        "iclass":{
          "icon-file-alt":true,
          "blue":true
        },
        "name":"委托查询"
      },{
        "href":"#",
        "first":false,
        "iclass":{
          "icon-legal":true,
          "blue":true
        },
        "name":"成交查询"
      },{
        "href":"#",
        "first":true,
        "iclass":{
          "icon-truck":true,
          "purple":true
        },
        "name":"提货查询"
      }]
    }
  },
  components : {
      tab,
      navs 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
