<template>
    <div class="time-off-request">
        <input v-model="date" type="date" />
        <button @click="submit">Submit Request</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: ''
        };
    },
    methods: {
        submit() {
            if (this.date) {
                this.$emit('submit-request', 1, this.date); // Hardcoded employeeId for demo
                this.date = ''; // Reset input
            } else {
                alert('Please select a date.');
            }
        }
    }
};
</script>

<style scoped>
.time-off-request {
    margin-bottom: 20px;
}
</style>
