<template>
  <div class="home">
    <img src="../assets/MTS.gif" alt="Logo">
    <h2>Welcome to the Main App!</h2>
      <p>Here is some protected content.</p>
      
      <button @click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  
  },
  methods:{
    logout() {
      this.$store.state.log= false; // Set the login state to false when logging out
    }
  },
  // data() {
  //   return {
  //     log:false
  //   }
  // },
}
</script>
<style scoped>
h2 {
  color: black;
}
p {
  color: rgb(255, 20, 20);
}
</style>