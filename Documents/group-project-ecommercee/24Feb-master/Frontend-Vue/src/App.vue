<template>
  <navbar-comp/>
  <VideoPopup/>
  <router-view/>
  <footer-comp/>
  <ScrollButton/>
  <div v-if="isVisible" @click="scrollToTop" class="scroll-btn"><i class="fas fa-arrow-up"></i></div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';
import BookingView from './views/BookingView.vue';
import TermsAndConditonsView from './views/TermsAndConditonsView.vue';
import FaqsView from './views/FaqsView.vue';
import VideoPopup from './components/VideoPopup.vue';
import ScrollButton from './components/ScrollButton.vue';
import ProductsView from './views/ProductsView.vue';
import AboutView from './views/AboutView.vue';
import PrivacyPolicyView from './views/PrivacyPolicyView.vue';
import CartView from './views/CartView.vue';

export default {
  components: {
  NavbarComp,
  FooterComp,
  TermsAndConditonsView,
  FaqsView,
  VideoPopup,
  ScrollButton,
  ProductsView,
  AboutView,
  PrivacyPolicyView,


},
data() {
    return {
      // isLoggedIn: true,
    }
  },
  methods: {
    handleLogin() {
      // this.isLoggedIn = true;
      // this.$router.push({ name: 'home' }); // Navigate to the home page after login
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.$router.push({ name: 'login' }); // Navigate back to the login page after logout
    },
  },
  watch: {
    $route(to) {
      // Check if user is logged in and prevent route to login page if logged in
      if (this.isLoggedIn && to.name === 'login') {
        this.isLoggedIn = false;
      }
    }
  }
}
</script>


<style>

</style>
