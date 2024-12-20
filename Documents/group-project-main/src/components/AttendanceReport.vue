<template>
    <div>
        <h3>Attendance Report</h3>
        <canvas id="attendanceChart"></canvas>
    </div>
</template>

<script>
export default {
    props: ['attendanceData'],
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const ctx = document.getElementById('attendanceChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.attendanceData.labels,
                    datasets: [{
                        label: 'Attendance',
                        data: this.attendanceData.data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
};
</script>

<style scoped>
/* Styles specific to AttendanceReport */
</style>
