/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from "@/store/store.js"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                {
                    path: '/',
                    redirect: '/home'
                },
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/userLayout/Home.vue'),
                    meta: {
                        pageTitle: 'home',
                        authRequired: false,
                        isAdmin: false,
                    }
                },
                {
                    path: '/item/:id',
                    name: 'show_item',
                    component: () => import('./views/userLayout/ShowItem.vue'),
                    meta: {
                        pageTitle: 'show Item',
                        authRequired: false,
                        isAdmin: false,
                    }
                },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('preloader');
    if (appLoading) {
        setTimeout(() => {
            appLoading.style.display = "none";
        }, 1000);
    }
})

router.beforeEach((to, from, next) => {
    // If auth required, check login. If login fails redirect to login page
    document.title = to.meta.pageTitle;
    next();
});

export default router
