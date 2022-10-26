import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import { useToken } from '../composables/useToken';

import LoginView from "../views/LoginView.vue";
import WelcomeView from "../views/WelcomeView.vue";
import GameView from "../views/GameView.vue";
import RankingView from "../views/RankingView.vue";

const { getToken, getAuthData } = useToken();

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
        meta: {
            guest: true
        }
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: WelcomeView,
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            const data = getAuthData()
            const dataUser = JSON.parse(data)
            if (!dataUser.has_vote) {
                next()
            } else {
                next({ name: 'Ranking' })
            }
            next()
        }
    },
    {
        path: '/game',
        name: 'Game',
        component: GameView,
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            const data = getAuthData()
            const dataUser = JSON.parse(data)
            if (!dataUser.has_vote) {
                next()
            } else {
                next({ name: 'Ranking' })
            }
            next()
        }
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: RankingView,
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            const data = getAuthData()
            const dataUser = JSON.parse(data)
            if (dataUser.has_vote) {
                next()
            } else {
                next({ name: 'Welcome' })
            }
            next()
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!getToken()) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (!getToken()) {
            next()
        } else {
            next({ name: 'Welcome' })
        }
    } else {
        next()
    }
})

export default router