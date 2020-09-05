/*=========================================================================================
  File Name: moduleCaptainMutations.js
  Description: Captain Module Mutations
==========================================================================================*/


export default {
    SET_SETTINGS(state, settings) {
        state.settings = settings
    },
    SET_HOME(state, sections) {
        state.sections = sections
    },
    SET_HOME_DATA_RECENT(state, recent_products) {
        state.recent_products = recent_products
    },
    SET_HOME_DATA_SETTINGS(state, settings) {
        state.settings = settings
    },
    SET_HOME_DATA_CATEGORIES(state, categories) {
        state.categories = categories
    },
}
