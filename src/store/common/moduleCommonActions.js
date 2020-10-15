import axios from "@/axios.js"
import requests from "@/requests.js"

export default {
    fetchSettings({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.COMMON_GET_ALL_SETTINGS, {
                params: filters
            })
                .then((response) => {
                    if (response.data.status) {
                        commit('SET_SETTINGS', response.data.data.settings)
                    }
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchHomePage({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.COMMON_GET_ALL_HOME_PAGE, {
                params: filters
            })
                .then((response) => {
                    if (response.data.status) {
                        commit('SET_HOME', response.data.data.sections)
                    }
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchFullSearch({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.FULL_SEARCH, {
                params: filters
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchHomeData({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.COMMON_GET_ALL_HOME_DATA, {
                params: filters
            })
                .then((response) => {
                    if (response.data.status) {
                        commit('SET_HOME_DATA_RECENT', response.data.data.recent_products);
                        commit('SET_HOME_DATA_SETTINGS', response.data.data.setting);
                        commit('SET_HOME_DATA_CATEGORIES', response.data.data.categories);
                    }
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchGetProduct({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.GET_PRODUCT_DETAILS + `/${filters.product_id}/${filters.branch_id}`, {
                params: filters
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchGetProductBySlug({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.GET_PRODUCT_DETAILS_BY_SLUG + `/${filters.slug}`, {
                params: filters
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    saveSubscribe({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(requests.CREATE_SUBSCRIBE, payload)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    saveContact({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(requests.CREATE_CONTACT, payload)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchAbout({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.GET_ALL_ABOUT, {
                params: filters
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchOptions({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.GET_ALL_OPTIONS, {
                params: filters
            }).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    fetchCategoriesMain({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.GET_ALL_CATEGORIES, {
                params: filters
            }).then((response) => {
                commit('SET_MAIN_CATEGORIES', response.data.data.categories);
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    fetchCategoriesSub({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.GET_ALL_CATEGORIES, {
                params: filters
            }).then((response) => {
                commit('SET_SUB_CATEGORIES', response.data.data.categories);
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        })
    },
}
