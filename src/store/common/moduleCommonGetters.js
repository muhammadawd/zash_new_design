/*=========================================================================================
  File Name: moduleCaptainGetters.js
  Description: Captain Module Getters
==========================================================================================*/


export default {
    getAllSettings: state => state.settings,
    getAllSections: state => state.sections,
    getAllRecentProducts: state => state.recent_products,
    getAllCategories: state => state.categories,
    getAllCategoriesMain: state => state.categories_main,
    getAllCategoriesSub: state => state.categories_sub,
}
