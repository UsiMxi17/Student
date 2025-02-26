// src/store/index.js
import { createStore } from 'vuex';
import { modalStore } from './modalStore'; // Import the modal store

export default createStore({
  state: {
    products: [],
    cartCount: 0,
  },
  getters: {
    allProducts: state => state.products,
    cartCount: state => state.cartCount,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_TO_CART(state) {
      state.cartCount++;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const mockProducts = [
        { id: 1, name: 'Product 1', price: 99.99, category: 'womens' },
        { id: 2, name: 'Product 2', price: 149.99, category: 'mens' },
        { id: 3, name: 'Product 3', price: 119.99, category: 'kids' },
        // Add more products as needed
      ];
      commit('SET_PRODUCTS', mockProducts);
    },
    addToCart({ commit }) {
      commit('ADD_TO_CART');
    },
  },
  modules: {
    modalStore, // Include modalStore as a module here
  },
});
