<template>
    <div class="container">
    <h2>Book a Stylist</h2>
    <form @submit.prevent="submitBooking">
        <div>
        <label>Name:</label>
        <input v-model="booking.name" type="text" required />
        </div>
        <div>
        <label>Email:</label>
        <input v-model="booking.email" type="email" required />
        </div>
        <div>
        <label>Date:</label>
        <input v-model="booking.booking_date" type="date" required />
        </div>
        <div>
        <label>Time:</label>
        <input v-model="booking.booking_time" type="time" required />
        </div>
        <div>
        <label>Stylist:</label>
        <input v-model="booking.stylist" type="text" required />
        </div>
        <div>
        <label>Comments:</label>
        <textarea v-model="booking.comments"></textarea>
        </div>
        <button type="submit">Book Now</button>
    </form>

    <p v-if="message" class="success">{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
    return {
        booking: {
        name: "",
        email: "",
        booking_date: "",
        booking_time: "",
        stylist: "",
        comments: ""
        },
        message: ""
    };
    },
    methods: {
    async submitBooking() {
        try {
        const response = await fetch("http://localhost:5000/api/book-stylist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.booking)
        });

        const result = await response.json();
        if (response.ok) {
            this.message = result.message;
            this.booking = { name: "", email: "", booking_date: "", booking_time: "", stylist: "", comments: "" };
        } else {
            alert("Error: " + result.message);
        }
        } catch (error) {
        console.error("Booking error:", error);
        }
    }
    }
};
</script>

<style>
.container {
    max-width: 400px;
    margin: auto;
}
.success {
    color: green;
}
</style>