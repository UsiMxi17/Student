<template>
  <nav v-if="this.$store.state.log" class="navbar sticky-top bg-body-tertiary border-bottom border-body" id="nav" data-bs-theme="dark">
    <div class="container-fluid d-flex justify-content-center">
      <a class="navbar-brand" href="#home">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pay">Payslip Summary</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/attendtrack">Attendance-Tracker</router-link>|
          </li>

          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> -->
          <li>
            <button @click="logout">Logout</button>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="back">
  <router-view v-if="this.$store.state.log"/>
  <div id="login">
    <!-- Show Login Component only when not logged in -->
    <LogIn v-if="!this.$store.state.log" @login-success="handleLoginSuccess" />
  </div>
  
  </div>
</template>

<script>
import LogIn from './components/LogIn.vue';
export default {
  components:{
    LogIn,

  },
  data() {
    return {
      timeOffRequests: [], // Track time-off requests
      log:false
    };
  },
  methods: {
    submitRequest(employeeId, date) {
      // Adding the request to the timeOffRequests array
      this.timeOffRequests.push({ employeeId, date, status: 'Pending' });
      console.log(`Request submitted for Employee ID: ${employeeId} on Date: ${date}`);
    },
    approveRequest(index) {
      if (this.timeOffRequests[index]) {
        this.timeOffRequests[index].status = 'Approved';
        console.log(`Request at index ${index} approved.`);
      } else {
        console.log(`No request found at index ${index}.`);
      }
    },
    denyRequest(index) {
      if (this.timeOffRequests[index]) {
        this.timeOffRequests[index].status = 'Denied';
        console.log(`Request at index ${index} denied.`);
      } else {
        console.log(`No request found at index ${index}.`);
      }
    },
    handleLoginSuccess() {
    this.$store.state.log = true; // Set the login state to true on successful login
    },
    logout() {
      this.$store.state.log = false; // Set the login state to false when logging out
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(); /* Full viewport height */
}
.back{
background-image: url(https://www.openaccessgovernment.org/wp-content/uploads/2023/09/iStock-1222540826-scaled.jpg);
background-repeat: no-repeat;
background-size: 100% 100%;
}

</style>
