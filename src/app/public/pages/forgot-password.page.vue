<script>
import httpInstance from "@/app/shared/services/http.instance.js";
import {$t} from "@primeuix/styled";

export default {
  name: "app-forgot-password",
  data(){
    return {
      email: '',
    }
  },
  methods:{
    $t,
    async onSubmit(){
      if(!this.email){
        alert(this.$t('ForgotPassword.EmailRequired'));
        return;
      }

      try {
        const response = await httpInstance.get(`/?email=${this.email}`);
        const users = response.data;

        if(users && users.length > 0){
          const userId = users[0].id;
          this.$router.push({ path: `/reset-password/${userId}` });
        }else {
          alert(this.$t('ForgotPassword.UserNotFound'));
        }
      }catch (error){
        console.error("Error verifying email:", error);
        alert(this.$t('ForgotPassword.Error'));

      }
    },
    toLogin(){
      this.$router.push({ path: `/login` });
    }
  }
}
</script>

<template>
  <div class="forgot-password-wrapper">
    <div class="form-container">
      <div class="header">
        <img src="/src/assets/img/principal-logo.png" alt="BikeShare Logo" />
        <h3>{{$t('ForgotPassword.Title')}}</h3>
        <p>{{$t('ForgotPassword.Instruction')}}</p>
      </div>

      <form @submit="onSubmit">
        <label></label>
        <input type="email" id="email" name="email"
               :v-model="email"
               :placeholder="$t('ForgotPassword.EmailPlaceholder')"
               required/>
        <button type="submit" class="btn-primary">{{$t('ForgotPassword.ContinueBtn')}}</button>
      </form>

      <div class="back-to-login">
        <a class="link-button" @click="toLogin">{{$t('ForgotPassword.BackToLogin')}}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.forgot-password-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.form-container {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.header img {
  width: 150px;
  margin-bottom: 20px;
}

.header h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.header p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;
}

input {
  padding: 12px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #5f8ce0;
  color: white;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.back-to-login {
  margin-top: 15px;
}

.link-button {
  color: #5f8ce0;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.link-button:hover {
  text-decoration: underline;
}

</style>