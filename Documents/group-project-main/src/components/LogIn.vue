<template >
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Form</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>

  <div class="login_form">
    <!-- Login form container -->
    <form @submit.prevent="login">
      <h3>Modern - Tech Solutions</h3>
    
      <!-- Login option separator -->
      <p class="separator"></p>

      <!-- Email input box -->
      <div class="input_box">
        <label for="email">Employee email</label>
        <input type="email" id="email" v-model="username" placeholder="Enter email address" required />
      </div>

      <!-- Password input box -->
      <div class="input_box">
        <div class="password_title">
          <label for="password">Password</label>
          <a href="#">Forgot Password?</a>
        </div>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
      </div>

      <!-- Login button -->
      <button type="submit">Log In</button>

    </form>
  </div>

</body>

</html>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      isForgotPassword: false
    };
    
},
methods: {
    login() {
      // You can replace this with your real authentication logic
      if (this.username === 'user@example.com' && this.password === 'password') {
        // Simulate successful login
        this.$emit('login-success'); // Emit an event to the parent to update login state
      } else {
        this.errorMessage = 'Invalid username or password!';
      }
    },
    resetPassword(){
      alert(`Password reset link sent to ${this.resetEmail}`)
      this.toggleForgotPassword
    }
  }
}
</script>


<style scoped  >
    /* Google Fonts Link */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
/* Resetting default styling and setting font-family */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}
body {
    width: 100%;
    min-height: 100vh;
    padding: 0 10px;
    display: flex;
    background: #626cd6;
    justify-content: center;
    align-items: center;

}
/* Login form styling */
.login_form {
    width: 100%;
    max-width: 435px;
    background: #fff;
    border-radius: 6px;
    padding: 41px 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
.login_form h3 {
    font-size: 20px;
    text-align: center;
}
/* Google & Apple button styling */
.login_form .login_option {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.login_form .login_option .option {
    width: calc(100% / 2 - 12px);
}
.login_form .login_option .option a {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: #F8F8FB;
    border: 1px solid #DADAF2;
    border-radius: 5px;
    margin: 34px 0 24px 0;
    text-decoration: none;
    color: #171645;
    font-weight: 500;
    transition: 0.2s ease;
}
.login_form .login_option .option a:hover {
    background: #ededf5;
    border-color: #626cd6;
}
.login_form .login_option .option a img {
    max-width: 25px;
}
.login_form p {
    text-align: center;
    font-weight: 500;
}
.login_form .separator {
    position: relative;
    margin-bottom: 24px;
}
/* Login option separator styling */
.login_form .separator span {
    background: #fff;
    z-index: 1;
    padding: 0 10px;
    position: relative;
}
.login_form .separator::after {
    content: '';
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    height: 1px;
    background: #C2C2C2;
    display: block;
}
form .input_box label {
    display: block;
    font-weight: 500;
    margin-bottom: 8px;
}
/* Input field styling */
form .input_box input {
    width: 100%;
    height: 57px;
    border: 1px solid #DADAF2;
    border-radius: 5px;
    outline: none;
    background: #F8F8FB;
    font-size: 17px;
    padding: 0px 20px;
    margin-bottom: 25px;
    transition: 0.2s ease;
}
form .input_box input:focus {
    border-color: #626cd6;
}
form .input_box .password_title {
    display: flex;
    justify-content: space-between;
    text-align: center;
}
form .input_box {
    position: relative;
}
a {
    text-decoration: none;
    color: #626cd6;
    font-weight: 500;
}
a:hover {
    text-decoration: underline;
}
/* Login button styling */
form button {
    width: 100%;
    height: 56px;
    border-radius: 5px;
    border: none;
    outline: none;
    background: #626CD6;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: 28px;
    transition: 0.3s ease;
}
form button:hover {
    background: #4954d0;
}
</style>