<template>
  <div class="super_container">
    <header class="header trans_300">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Kids</h1>
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
            <div class="review-stars">
              <span v-for="star in product.reviews.rating" :key="star" class="star">★</span>
              <span v-for="star in 5 - product.reviews.rating" :key="star + 100" class="star empty">★</span>
              <span class="review-count">({{ product.reviews.count }} reviews)</span>
            </div>
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
            <button @click="openModal(product)" class="btn btn-secondary">Quick View</button>
          </div>
        </div>
      </div>
    </div>

    <QuickViewModal 
      :visible="modalVisible" 
      :product="selectedProduct" 
      @close="modalVisible = false"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { products } from '@/store/products';
import QuickViewModal from '@/components/QuickViewModal.vue';

const modalVisible = ref(false);
const selectedProduct = ref(null);

const openModal = (product) => {
  selectedProduct.value = product;
  modalVisible.value = true;
};

const store = useStore();

const filteredProducts = computed(() => {
  return products.filter(product => product.category === "kids");
});

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

/* Other existing styles */
.header {
  background-color: #f8f9fa;
  padding: 2rem 0;
}

.product_categories h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.category-btn {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 60px;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(45deg, #ff69b4, #ffeb3b, #4caf50);
  color: transparent;
  background-clip: text;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.category-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 255, 255, 0.3), rgba(227, 125, 214, 0.3), rgba(137, 137, 246, 0.2));
  border-radius: 5px;
  z-index: -1; /* Place it behind the button */
  animation: hologramAnimation 1.5s infinite alternate; /* Hologram animation */
}

.category-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 25px rgba(221, 154, 216, 0.8);
}

@keyframes hologramAnimation {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Add space between buttons */
.card-body button {
  margin-top: 10px;
  margin-right: 10px;  /* Adds space between buttons */
}

/* Styling for the product grid */
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  width: 22%;
  margin-bottom: 20px;
}

.product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  background-color: #ff4081;
  border-color: #ff4081;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  margin-top: 10px; /* Adds space above the secondary button */
  color: white;
}
</style>
