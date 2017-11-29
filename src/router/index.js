import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Login from '@/components/login.vue'
import Courses from '@/components/courses.vue'
import CourseDetail from '@/components/coursedetail.vue'
import Shopping from '@/components/shopping.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/courses',
          name: 'courses',
          component: Courses
        },
        {
          path: '/course/:id',
          name: 'coursedetail',
          component: CourseDetail
        },
        {
          path: '/shopping',
          name: 'shopping',
          component: Shopping
        }

      ]
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/courses',
    //   name: 'courses',
    //   component: Courses
    // },
    // {
    //   path: '/phones',
    //   name: 'phones',
    //   component: Phones
    // },
  ]
})
