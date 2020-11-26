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
    mode: 'hash',
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
                    path: '/search',
                    name: 'search',
                    component: () => import('./views/userLayout/Search.vue'),
                    meta: {
                        pageTitle: 'Search',
                        authRequired: false,
                        isAdmin: false,
                    }
                },
                {
                    path: '/about_us',
                    name: 'about_us',
                    component: () => import('./views/userLayout/AboutUs.vue'),
                    meta: {
                        pageTitle: 'About Us',
                        authRequired: false,
                        isAdmin: false,
                    }
                },
                {
                    path: '/snapChat',
                    name: 'snapChat',
                    component: () => import('./views/userLayout/snapChat.vue'),
                    meta: {
                        pageTitle: 'snap Chat',
                        authRequired: false,
                        isAdmin: false,
                    }
                },
                {
                    path: '/contact_us',
                    name: 'contact_us',
                    component: () => import('./views/userLayout/ContactUs.vue'),
                    meta: {
                        pageTitle: 'Contact Us',
                        authRequired: false,
                        isAdmin: false,
                    }
                },
                {
                    path: '/career',
                    name: 'career',
                    component: () => import('./views/userLayout/Career.vue'),
                    meta: {
                        pageTitle: 'Career',
                        authRequired: false,
                        isAdmin: false,
                    }
                },
                {
                    path: '/privacy',
                    name: 'privacy',
                    component: () => import('./views/userLayout/Privacy.vue'),
                    meta: {
                        pageTitle: 'Privacy',
                        authRequired: false,
                        isAdmin: false,
                    }
                },
                {
                    path: '/items/:slug',
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
        }, 2000);
    }
})

router.beforeEach((to, from, next) => {
    // If auth required, check login. If login fails redirect to login page
    document.title = to.meta.pageTitle;
    next();
});

export default router
