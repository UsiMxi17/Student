<template>
    <div>
        <h2>Attendance Tracker</h2>
        <time-off-request @submit-request="submitRequest"></time-off-request>
        <div v-for="(request, index) in timeOffRequests" :key="index">
            <p>{{ request.employeeId }} - {{ request.date }}: {{ request.status }}</p>
            <button @click="approveRequest(index)">Approve</button>
            <button @click="denyRequest(index)">Deny</button>
        </div>
    </div>
</template>

<script>
import TimeOffRequest from './TimeOffRequest.vue';

export default {
    components: {
        TimeOffRequest
    },
    data() {
        return {
            timeOffRequests: []
        };
    },
    methods: {
        submitRequest(employeeId, date) {
            this.timeOffRequests.push({ employeeId, date, status: 'Pending' });
        },
        approveRequest(index) {
            const request = this.timeOffRequests[index];
            request.status = 'Approved';
            // Logic to update attendance can be added here
        },
        denyRequest(index) {
            this.timeOffRequests[index].status = 'Denied';
        }
    }
};
</script>

<style scoped>
/* Styles specific to AttendanceTracker */
</style>
