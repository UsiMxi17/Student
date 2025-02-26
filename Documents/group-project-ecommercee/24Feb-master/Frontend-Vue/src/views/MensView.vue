<template>
  <div class="super_container">
    <header class="header trans_300">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Men's Range</h1>
          </div>
        </div>
      </div>
    </header>

    <div class="product-grid">
      <div v-for="product in filteredProducts" :key="product.id" class="product-item">
        <div class="card">
          <img :src="product.image" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">R{{ product.price }}</p>

            <!-- Review Section -->
            <div class="review-stars">
              <span v-for="star in product.reviews.rating" :key="star" class="star">★</span>
              <span v-for="star in 5 - product.reviews.rating" :key="star + 100" class="star empty">★</span>
              <span class="review-count">({{ product.reviews.count }} reviews)</span>
            </div>

            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
            <button @click="openQuickView(product)" class="btn btn-secondary">Quick View</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick View Modal -->
    <div v-if="showModal" class="modal" @click.self="closeQuickView">
      <div class="modal-content">
        <span @click="closeQuickView" class="close-btn">&times;</span>
        <h2>{{ selectedProduct.name }}</h2>
        <img :src="selectedProduct.image" :alt="selectedProduct.name" class="modal-img" />
        <p>{{ selectedProduct.description }}</p>
        <p><strong>Price:</strong> R{{ selectedProduct.price }}</p>
        <button @click="addToCart(selectedProduct)" class="btn btn-primary">Add to Cart</button>
      </div>
    </div>

    <div class="cart-counter">
      <router-link to="/cart">
        <i class="fa fa-shopping-cart"></i>
        <span class="badge">{{ cartCount }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { products } from '@/store/products'; // Import from a shared store

const store = useStore();

// Filter products for Men's range
const filteredProducts = computed(() => {
  return products.filter(product => product.category === "mens");
});

// Quick View Modal Handling
const showModal = ref(false);
const selectedProduct = ref(null);

const openQuickView = (product) => {
  selectedProduct.value = product;
  showModal.value = true;
};

const closeQuickView = () => {
  showModal.value = false;
};

// Cart Management
const addToCart = (product) => {
  store.dispatch('addToCart', product);
};
</script>

<style scoped>
/* Styling for the star ratings */
.review-stars {
  margin: 10px 0;
  font-size: 1.5rem;
  color: #f0b10d; /* Gold color for stars */
  display: flex;
  align-items: center;
}

.star {
  color: #f0b10d; /* Filled star color */
}

.star.empty {
  color: #e4e4e4; /* Empty star color */
}

.review-count {
  margin-left: 10px;
  font-size: 1rem;
  color: #666;
  font-weight: normal;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 60%;
  max-width: 800px;
}

.modal-img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
}

/* Other existing styles */
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

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  margin-top: 10px;
  color: white;
}

/* Add space between the buttons */
.card-body button {
  margin-top: 10px;
  margin-right: 10px; /* Adds space between buttons */
}

.cart-counter {
  position: absolute;
  top: 20px;
  right: 20px;
}

.cart-counter .badge {
  background-color: red;
  color: white;
}
</style>
