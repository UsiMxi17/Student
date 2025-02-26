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
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">R{{ product.price }}</p>
          <router-link :to="`/product/${product.id}`" class="btn btn-info">View Details</router-link>
          <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Product Details Page -->
  <div v-if="selectedProduct" class="product-details">
    <div class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6 text-center">
          <img :src="selectedProduct.image" alt="Product Image" class="img-fluid product-img">
        </div>
        <div class="col-md-6">
          <h2 class="product-title">{{ selectedProduct.name }}</h2>
          <p class="product-price">R{{ selectedProduct.price }}</p>
          <div class="d-flex gap-3">
            <button @click="addToCart(selectedProduct)" class="btn btn-primary btn-lg">🛒 Add to Cart</button>
            <button class="btn btn-success btn-lg">💳 Buy Now</button>
          </div>
          <ReviewStars :productId="selectedProduct.id" />
          <div class="reviews mt-4">
            <h3>Customer Reviews</h3>
            <div v-for="review in reviews" :key="review.id" class="review-card">
              <div class="d-flex align-items-center">
                <img :src="review.avatar" class="review-avatar">
                <div>
                  <strong>{{ review.user }}</strong>
                  <div class="stars" v-html="getStars(review.rating)"></div>
                </div>
              </div>
              <p class="review-text">"{{ review.comment }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { products } from '@/store/products';
import ReviewStars from '@/components/ReviewStars.vue';

const store = useStore();
const route = useRoute();
const activeFilter = ref('all');
const selectedProduct = ref(null);
const reviews = ref([]);

const filterCategory = (category) => {
  activeFilter.value = category;
};

const filteredProducts = computed(() => {
  return activeFilter.value === 'all' ? products : products.filter(p => p.category === activeFilter.value);
});

const addToCart = (product) => {
  store.dispatch('addToCart', product);
};

onMounted(() => {
  const productId = route.params.id;
  if (productId) {
    selectedProduct.value = products.find(p => p.id === parseInt(productId));
    reviews.value = [
      { id: 1, user: "Alice M.", rating: 5, comment: "Absolutely love this product!", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
      { id: 2, user: "David R.", rating: 4, comment: "Great quality!", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
      { id: 3, user: "Sophia L.", rating: 3, comment: "Good but expected a bit more coverage.", avatar: "https://randomuser.me/api/portraits/women/12.jpg" }
    ];
  }
});

const getStars = (rating) => {
  return "⭐".repeat(rating) + "☆".repeat(5 - rating);
};
</script>

<style scoped>
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

.product-details {
  max-width: 900px;
  margin: auto;
}

.product-img {
  max-width: 100%;
  border-radius: 10px;
}

.product-title {
  font-size: 2rem;
  font-weight: bold;
}

.product-price {
  font-size: 1.5rem;
  color: #ff4d6d;
}

.btn-primary, .btn-success {
  font-size: 1.1rem;
  padding: 10px 20px;
  border-radius: 10px;
  transition: transform 0.2s;
}

.btn-primary:hover, .btn-success:hover {
  transform: scale(1.05);
}

.reviews {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}
</style>
