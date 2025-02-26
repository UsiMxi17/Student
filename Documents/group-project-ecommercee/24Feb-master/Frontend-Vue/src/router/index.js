import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ProductsView from '@/views/ProductsView.vue'
import BookingView from '@/views/BookingView.vue'
import SalesView from '@/views/SalesView.vue'
import ContactView from '@/views/ContactView.vue'
import TermsAndConditonsView from '@/views/TermsAndConditonsView.vue'
import FaqsView from '@/views/FaqsView.vue'
import AboutView from '@/views/AboutView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import CartView from '@/views/CartView.vue'
import WomensView from '@/views/WomensView.vue'
import MensView from '@/views/MensView.vue'
import KidsView from '@/views/KidsView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import ReviewStars from '@/components/ReviewStars.vue'


const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/booking",
    name: "booking", //
    component: BookingView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/terms-conditions",
    name: "termsandconditions",
    component: TermsAndConditonsView,
  },
  {
    path: "/faqs",
    name: "faqs",
    component: FaqsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/privacypolicy",
    name: "privacypolicy",
    component: PrivacyPolicyView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/womens",
    name: "womens",
    component: WomensView,
  },
  {
    path: "/mens",
    name: "mens",
    component: MensView,
  },
  {
    path: "/kids",
    name: "kids",
    component: KidsView,
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/product/:id",
    name: "productdetails",
    component: ProductDetailsView,
    props: true,
  },
  {
    path: "/review",
    name: "review",
    component: ReviewStars,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
