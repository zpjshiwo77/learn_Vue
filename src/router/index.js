import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['@/page/index'], resolve);
const myPro = resolve => require(['@/page/myPro'], resolve);
const user = resolve => require(['@/page/user'], resolve);
const placard = resolve => require(['@/page/placard'], resolve);
const placardCont = resolve => require(['@/page/placardCont'], resolve);
const proDetail = resolve => require(['@/page/proDetail'], resolve);
const proShow = resolve => require(['@/page/proShow'], resolve);
const showDetail = resolve => require(['@/page/showDetail'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/myPro',
      name: 'myPro',
      component: myPro
    },{
      path: '/user',
      name: 'user',
      component: user
    },{
      path: '/placard',
      name: 'placard',
      component: placard
    },{
      path: '/placardCont',
      name: 'placardCont',
      component: placardCont
    },{
      path: '/proDetail',
      name: 'proDetail',
      component: proDetail
    },{
      path: '/proShow',
      name: 'proShow',
      component: proShow
    },{
      path: '/showDetail',
      name: 'showDetail',
      component: showDetail
    }
  ]
})
