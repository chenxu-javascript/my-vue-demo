import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import todo from '@/components/to-do'
import index from '@/page/indexed'
import item from '@/page/item'
import com from '@/page/com'
import vuexstore from '@/page/vuexstore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/com',
      name: 'com',
      component: com
    },
    {
      path: '/vuexstore',
      name: 'vuexstore',
      component: vuexstore
    }
  ]
})
