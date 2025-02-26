<template>
    <div v-if="visible" class="modal">
      <div class="modal-content">
        <span @click="$emit('close')" class="close-btn">×</span>
        <img :src="product.image" alt="Product image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>R{{ product.price }}</p>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  visible: Boolean,
  product: Object
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure modal is on top */
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 40%; /* Smaller width */
  max-width: 500px; /* Limit the maximum width */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add shadow for better visibility */
}

.modal img {
  max-width: 100%; /* Ensure the image doesn't overflow */
  height: auto;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
