<template>
  <div>
    <ititle title="产品详情"></ititle>
    <div class="content">
      <cont v-html="thisPro" class="indentN"></cont>
    </div>
    <router-link :to="'#'" class="ibtn">立即购买</router-link>
    <!-- <div class="ibtn" v-on:click="alert('敬请期待')">立即购买</div> -->
  </div>
</template>
<script>
import {showProsData} from '../../static/js/data/prosData.js'
import ititle from '@/components/title'
import cont from '@/components/cont'

export default {
  name: 'proShow',
  data () {
    return {
      pros:showProsData()
    }
  },
  components : {
    ititle,
    cont
  },
  computed:{
    thisPro:function(){
      var pro = "";
      var id = this.$route.params.id;
      for (var i = 0; i < this.pros.length; i++) {
        if(id == this.pros[i].id) pro = this.pros[i].cont;
      };
      return pro;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  width: 6.8rem;
  margin: 0 auto;
  padding:0.7rem 0 1.1rem;
}
</style>
