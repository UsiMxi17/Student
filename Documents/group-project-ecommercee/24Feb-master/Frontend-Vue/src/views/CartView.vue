<template>
    <div class="cart-page">
      <h2>Your Cart</h2>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" alt="product image" class="cart-item-image" />
          <div>
            <h4>{{ item.name }}</h4>
            <p>R{{ item.price }}</p>
          </div>
        </div>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  // Computed property to get cart items from the store
  const cartItems = computed(() => store.state.cart);
  
  // Placeholder function for checkout
  const checkout = () => {
    alert('Proceeding to checkout');
  };
  </script>
  
  <style scoped>
  .cart-page {
    padding: 20px;
  }
  
  .cart-item {
    display: flex;
    margin-bottom: 20px;
  }
  
  .cart-item-image {
    max-width: 100px;
    margin-right: 20px;
  }
  </style>
  