import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true

//jQuery
global.jQuery = require('jquery');
window.$ = global.jQuery;

import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)

// axios
import axios from "./axios.js"

Vue.prototype.$http = axios;

import {VueHammer} from 'vue2-hammer'

Vue.use(VueHammer)

import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);

import gsap from "gsap";

import PicZoom from 'vue-piczoom'

Vue.component('pic-zoom', PicZoom)

import ProductZoomer from 'vue-product-zoomer'

Vue.use(ProductZoomer)


// service worker
// import './registerServiceWorker'

// helper
import helper from "./helpers/helper.js"

Vue.prototype.$helper = helper;

// lodash
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.use(VueLodash, {name: 'custom', lodash: lodash});

import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);

// Notifications
import Notifications from 'vue-notification'

Vue.use(Notifications)

// i18n
import i18n from './i18n/i18n'

// Styles: Arabic CSS
let language = helper.getLocalStorage('language');
language = language ? language : (helper.setLocalStorage('language', 'en'));
i18n.locale = language;

const arThemecss = () => {
    import('@/assets/css/styles.css');
    import('@/assets/css/colors.css');
    import('@/assets/css/plugins/bootstrap.rtl.min.css');
    import('@/assets/css/ar.css');
};
arThemecss();
document.documentElement.setAttribute('lang', language);


// VeeValidate
import VeeValidate from 'vee-validate'
import {Validator} from 'vee-validate';
import en from 'vee-validate/dist/locale/en.js';
import ar from 'vee-validate/dist/locale/ar.js';

Vue.directive('VeeValidate', VeeValidate);
Vue.use(VeeValidate, {
    inject: true
});

import translationArMessages from './i18n/translationArMessages';

if (language === 'ar') {
    Validator.localize('ar', translationArMessages);
}

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
