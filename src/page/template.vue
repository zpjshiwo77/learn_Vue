<template>
  <div>
    <navs :trfAct = 'true' ></navs>
    <list :p_data = 'p_data'></list>
  </div>
</template>
<script>
import {getData} from '../../static/js/data/product.js'
import list from '@/components/list'
import navs from '@/components/nav'
export default {
  name: 'index',
  data () {
    return {
      p_data:getData()
    }
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
