<template>
  <div class="info first">
    <table>
      <tr>
        <td v-for="info in infos" :style="tdWidth">{{info.name}}</td>
      </tr>
      <tr>
        <td v-for="info in infos" :style="tdWidth" :class="info.iclass">{{info.val}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'info',
  props:["infos"],
  computed:{
    tdWidth:function(){
      var width = {};
      width.width = 100 / this.infos.length + "%";
      return width;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
  width: 100%;
  padding: 0.2rem 0;
  background: #fff;
}
.info table{
  width: 100%;
  height: auto;
}
.info table tr{
  width: 100%;
}
.info table tr td{
  font-size: 0.28rem;
  text-align: center;
  line-height: 1.5;
}
</style>
