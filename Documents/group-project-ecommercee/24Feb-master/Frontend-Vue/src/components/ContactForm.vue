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
        async submitForm() {
try {
    const response = await fetch("http://localhost:5000/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: this.name,
        email: this.email,
        message: this.message,
        created_at: this.created_at
    }),
    });

    if (!response.ok) {
    throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    
    if (result.success) {
    this.messageSent = true;
    this.name = "";
    this.email = "";
    this.message = "";
    this.created_at = ""
    } else {
    alert(result.message);
    }
} catch (error) {
    console.error("Error sending message:", error);
    alert("Could not send message. Please check your internet connection and try again.");
}
}}
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