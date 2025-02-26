<template>
  <div class="super_container">
    <header class="header trans_300">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="holographic-heading">Women's Makeup</h1> <!-- Applied holographic class here -->
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
import { products } from '@/store/products'; // Import from a shared store
import QuickViewModal from '@/components/QuickViewModal.vue';

const modalVisible = ref(false);
const selectedProduct = ref(null);

const openModal = (product) => {
  selectedProduct.value = product;
  modalVisible.value = true;
};

const store = useStore();

// Filter products by the "womens" category
const filteredProducts = computed(() => {
  return products.filter(product => product.category === "womens");
});

const addToCart = (product) => {
  store.dispatch('addToCart', product);
};
</script>

<style scoped>
/* Holographic Header Styling */
.header {
  background: linear-gradient(120deg, 
    #8e9eab, #69a9e0, #97c4f2, #f29cb1, 
    #8e9eab, #f29cb1, #97c4f2, #69a9e0
  );
  background-size: 400% 400%;
  animation: holoHeaderEffect 6s infinite alternate;
  color: white;
  text-align: center;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Keyframes for Holographic Effect */
@keyframes holoHeaderEffect {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Header Text Styling */
.holographic-heading {
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
}

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
  margin-right: 10px; /* Added space between buttons */
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}
</style>
