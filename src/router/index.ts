import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'PageHome',
            component: () => import('../pages/home/index.vue')
        },
        {
            path: '/users/:id',
            name: 'PageUser',
            component: () => import('../pages/user/index.vue')
        },
    ]
})
