import helper from './helpers/helper'

export default {
    BASE: process.env.VUE_APP_API,

    REFRESH_ACCESS_TOKEN: '',

    COMMON_GET_ABOUT: 'branch/find/1',
    COMMON_GET_ALL_SETTINGS: 'common/getSetting',
    COMMON_GET_ALL_HOME_PAGE: 'homepage',
    COMMON_GET_ALL_HOME_DATA: 'utilities/get-home-data',

    GET_PRODUCT_DETAILS: 'products/product-detailed',
    GET_PRODUCT_DETAILS_BY_SLUG: 'products/product-detailed-slug',
    FULL_SEARCH: 'products/filter-all-products',

    GET_ALL_CATEGORIES: 'categories',
    GET_ALL_SLIDERS: 'slider',
    CREATE_SUBSCRIBE: '/subscribe/create',
    CREATE_CONTACT: '/contact-us/create',
    CREATE_CAREER: '/utilities/createCareer',
    GET_ALL_ABOUT: '/about',
    GET_ALL_OPTIONS: '/options/all/1',

}
