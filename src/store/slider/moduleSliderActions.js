import axios from "@/axios.js"
import requests from "@/requests.js"

export default {
    getAllSliders({commit}, filters) {
        return new Promise((resolve, reject) => {
            axios.get(requests.GET_ALL_SLIDERS, {
                params: filters
            }).then((response) => {
                if (response.data.status) {
                    commit('SET_SLIDERS', response.data.data.sliders)
                }
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        })
    },
}
