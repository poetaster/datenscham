import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Quiz from '@/views/Quiz'
import Result from '@/views/Result'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/quiz/',
            name: 'quiz',
            component: Quiz
        },
        {
            path: '/score/',
            name: 'result',
            component: Result
        }
    ],
//    mode: 'history'
})
