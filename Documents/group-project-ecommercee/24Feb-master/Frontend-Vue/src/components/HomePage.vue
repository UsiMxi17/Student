/* eslint-disable vue/comment-directive */
<template>
    <div>
      <!-- <router-link to="/about">About</router-link> -->
      <HeroSection />
      <CarouselSection />
      <ProductSection />
      <ServicesSection />
    </div>
</template>

<script>
import HeroSection from './HeroSection.vue';
import CarouselSection from './CarouselSection.vue';
import ProductSection from './ProductSection.vue';
import ServicesSection from './ServicesSection.vue';

export default {
    name: 'HomePage',
    components: {
        HeroSection,
        CarouselSection,
        ProductSection,
        ServicesSection,
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                time: '',
                stylist: '',
                comments: ''
            },
            selectedDate: null, // Store the selected date
            showModal: false
        };
    },
    methods: {
        async handleSubmit() {
            if (!this.form.name || !this.form.email || !this.selectedDate || !this.form.time || !this.form.stylist) {
                alert("All fields are required.");
                return;
            }

            try {
                const response = await fetch("http://localhost:5000/api/book-stylist", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: this.form.name,
                        email: this.form.email,
                        booking_date: this.selectedDate ? this.selectedDate.toISOString().split('T')[0] : null, // Format date
                        booking_time: this.form.time,
                        stylist: this.form.stylist,
                        comments: this.form.comments
                    })
                });

                if (!response.ok) {
                    throw new Error("Failed to submit booking.");
                }

                this.showModal = true;
                this.resetForm();
            } catch (error) {
                console.error("Error:", error);
                alert("Booking submission failed.");
            }
        },
        resetForm() {
            this.form = {
                name: '',
                email: '',
                time: '',
                stylist: '',
                comments: ''
            };
            this.selectedDate = null;
        }
    }
};
</script>