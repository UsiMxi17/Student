<template>
  <div class="super_container">
    <!-- Header -->
    <header class="header trans_300">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Makeup Collections</h1>
          </div>
        </div>
      </div>
    </header>
  </div>

  <!-- Category Filter Section -->
  <section class="product_categories py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <router-link to="/womens" class="category-btn">Women's Makeup</router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/mens" class="category-btn">Men's Makeup</router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/kids" class="category-btn">Kid's Makeup</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Product Grid -->
  <div class="product-grid">
    <div v-for="product in filteredProducts" :key="product.id" class="product-item">
      <div class="card">
        <img :src="product.image" class="card-img-top" :alt="product.name">
        <div class="card-body text-center">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">R{{ product.price }}</p>
          <button @click="addToCart(product)" class="btn btn-primary">
            <i class="fa fa-shopping-cart"></i> Add to Cart
          </button>
          <router-link :to="`/product/${product.id}`" class="btn btn-secondary">
            <i class="fa fa-eye"></i> View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Cart Counter -->
  <div class="cart-counter">
    <router-link to="/cart">
      <i class="fa fa-shopping-cart"></i>
      <span class="badge">{{ cartCount }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { products } from '@/store/products';

const store = useStore();
const activeFilter = ref('all');

const filteredProducts = computed(() => {
  return activeFilter.value === 'all' ? products : products.filter(p => p.category === activeFilter.value);
});

const addToCart = (product) => {
  store.dispatch('addToCart', product);
};
</script>

<style scoped>
.header {
  background-color: #f8f9fa;
  padding: 2rem 0;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  width: 22%;
  margin-bottom: 20px;
}

.card {
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card img {
  max-height: 250px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

.btn-primary {
  background-color: #e65540;
  border-color: #e65540;
}
</style>
