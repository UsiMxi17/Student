<template>
    <div>
        <h3>Employee List</h3>
        <ul>
            <li v-for="employee in employees" :key="employee.id">
                {{ employee.name }} - Attendance: {{ employee.attendance }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['employees']
};
</script>

<style scoped>
/* Styles specific to EmployeeList */
</style>
