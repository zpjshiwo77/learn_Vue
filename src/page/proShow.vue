<template>
  <div class="content">
    <showList :pros = 'pros'></showList>
    <navs :showAct = 'true' ></navs>
  </div>
</template>
<script>
// import {iAjax,domainUrl} from '../../static/js/public/public.js'
import {showProsData} from '../../static/js/data/prosData.js'
import navs from '@/components/nav'
import showList from '@/components/showList'

export default {
  name: 'proShow',
  data () {
    return {
      pros:showProsData()
    }
  },
  components : {
      navs,
      showList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  padding-bottom: 1.2rem;
}
</style>
