import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home'
import Goods from '@/view/Goods'
import My from '@/view/My'
import GoodsDetail from '@/view/GoodsDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/goodsDetail/:id',
      name: 'GoodsDetail',
      component: GoodsDetail
    }
  ]
})
