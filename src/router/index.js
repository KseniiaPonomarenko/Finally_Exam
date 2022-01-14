import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../components/MainPage"

Vue.use(VueRouter)

const routes = [


  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage
  },

]

const router = new VueRouter({
  routes
})

export default router
