<template>
    <div>
    <h2>My Loyalty Points</h2>
    <p>You have {{ points }} points</p>
    <button @click="redeemPoints">Redeem Points</button>
    </div>
</template>

<script>
export default {
    data() {
    return {
        points: 0
    };
    },
    async created() {
    const response = await fetch(`http://localhost:5000/points/${this.$store.state.userId}`);
    const data = await response.json();
    this.points = data.points;
    },
    methods: {
    async redeemPoints() {
        await fetch("http://localhost:5000/redeem-points", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: this.$store.state.userId, pointsToRedeem: 50 })
        });
        alert("Points redeemed!");
        this.points -= 50;
    }
    }
};
</script>