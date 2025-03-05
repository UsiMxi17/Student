<template>
    <div class="container">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitMessage">
        <div>
        <label>Name:</label>
        <input v-model="contact.name" type="text" required />
        </div>
        <div>
        <label>Email:</label>
        <input v-model="contact.email" type="email" required />
        </div>
        <div>
        <label>Message:</label>
        <textarea v-model="contact.message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
    </form>

    <p v-if="message" class="success">{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
    return {
        contact: { name: "", email: "", message: "" },
        message: ""
    };
    },
    methods: {
async submitMessage() {
    try {
    const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.contact),
    });

    const result = await response.json();

    if (result.success) {
        this.message = result.message;
        this.contact = { name: "", email: "", message: "" };
    } else {
        alert(result.message);
    }
    } catch (error) {
    console.error("Message submission error:", error);
    alert("Could not submit your message.");
    }
}
}
}
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