<template>
  <div class='contBox'>

    <router-link :to="info.url" v-for="info in infos"><div class="block">
      <h1><span>{{info.tab}}</span>{{info.title}}</h1>
      <p>{{info.cont}}</p>
      <p class="time">{{info.date}}</p>
      <i class="icon-chevron-right"></i>
    </div></router-link>

    <navs :ancAct = 'true' ></navs>
  </div>
</template>
<script>
import navs from '@/components/nav'
export default {
  name: 'placard',
  data () {
    return {
      infos:[{
        tab:"置顶",
        title:"首批招商公告",
        cont:"首期上线公告首期上线公告首期上线公告首期上线公告首期上线公告首期上线公告首期上线公告",
        date:"2017-03-21",
        url:"/placardCont?id=1"
      },{
        tab:"置顶",
        title:"首批招商公告2",
        cont:"首期上线公告首期上线公告首期上线公告首期上线公告首期上线公告首期上线公告首期上线公告2",
        date:"2017-03-21",
        url:"/placardCont?id=1"
      }]
    }
  },
  components : {
      navs 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contBox{
  padding-bottom: 1.2rem;
}
.contBox a{
  width: 100%;
}
.contBox .block{
  width: 100%;
  height: 2.2rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.contBox .block h1{
  width: 100%;
  height: auto;
  padding-top: 0.2rem;
  height: 0.5rem;
  position: relative;
  top:0.1rem;
  font-size: 0.28rem;
  color: #dba343;
}
.contBox .block h1 span{
  padding: 0.05rem 0.15rem;
  margin: 0 0.2rem;
  border: 1px solid rgb(235, 110, 98);
  border-radius: 0.1rem;
  color: rgb(235, 110, 98);
}
.contBox .block p{
  width: 80%;
  padding: 0.1rem 0 0 0.2rem;
  line-height: 1.5;
  color: #777;
}
.contBox .block i{
  position: absolute;
  top:50%;
  right: 0.3rem;
  font-size: 0.5rem;
  margin-top: -0.25rem;
}
</style>
