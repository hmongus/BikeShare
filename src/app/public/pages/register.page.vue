<script>
import httpInstance from "@/app/shared/services/http.instance.js";
import {$t} from "@primeuix/styled";

export default {
  name: "app-register-page",
  data(){
    return {
      fullName: String(),
      email: String(),
      password: String(),
      isOwner: false,
    }
  },
  methods:{
    toLogin(){
      this.$router.push("/login");
    },
    switchLanguage(language){
      this.$i18n.locale = language;
    },
    onSubmit(){
      const newUser ={
        email: this.email,
        password: this.password,
        isOwner: this.isOwner
      }
      httpInstance.post('/users',newUser).then((response)=>{
        alert(this.$t('Register.UserRegistered:', response.data.message));
        this.resetForm()
        this.$router.push('/login');
      }).catch(error=>{
        console.log('Error registering user',error);
        alert(error.response.data.message);
      })
    },
    resetForm() {
      this.fullName = "";
      this.email = "";
      this.password = "";
      this.isOwner = false;
    }
  }
}
</script>

<template>
  <div class="register-wrapper">
    <div class="register-left">
      <img src="/src/assets/img/principal-logo.png" alt="BikeShare Logo" />
      <h2>{{ $t('Register.Welcome') }} <span>BikeShare</span></h2>
      <p>{{ $t('Register.TagLine')}}</p>
    </div>

    <div class="register-right">
      <div class="language-switcher">
        <button @click="switchLanguage('es')" :class="{active: this.$i18n.locale === 'es'}">ES</button>
        <button @click="switchLanguage('en')" :class="{active: this.$i18n.locale === 'en'}">EN</button>
      </div>

      <form @submit="onSubmit()">
        <h3>{{ $t('Register.CreateAccount')}}</h3>
        <p>{{ $t('Register.ItsFree')}}</p><br>

        <label>{{ $t('Register.RegisterAs')}}</label>
        <select name="isOwner" v-model="isOwner" required>
          <option :value="false">{{ $t('Register.OptionRenter') }}</option>
          <option :value="true">{{ $('Register.OptionOwner') }}</option>
        </select><br>

        <label>{{ $t('Register.FullName')}}</label>
        <input type="text" name="fullName" v-model="fullName" :placeholder="$t('Register.FullNamePlaceholder')" required />

        <label>{{ $t('Register.EmailLabel') }}</label>
        <input type="email" name="email" v-model="email" :placeholder="$t('Register.EmailPlaceholder')" required />

        <label>{{ $t('Register.PasswordLabel') }}</label>
        <input type="password" name="password" v-model="password" :placeholder="$t('Register.PasswordPlaceholder')" required />

        <div class="terms">
          <input type="checkbox" required />
          <small>
            {{ $t('Register.TermsText') }}
          </small>
        </div>

        <button type="submit" class="btn-register">{{ $t('Register.CreateAccountBtn')}}</button>

        <div class="login-text">
          {{ $t('Register.AlreadyHaveAccount')}}
          <button type="button" @click="toLogin" class="link-button">{{ $t('Register.SignIn')}}</button>
        </div>
      </form>
    </div>
  </div>

</template>

<style scoped>
.register-wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.register-left {
  background-color: #fdd187;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  height: 100%;
}
.register-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
}


.language-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
}

.language-switcher button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #555;
}

.language-switcher button.active {
  background-color: #5f8ce0;
  color: white;
  border-color: #5f8ce0;
}

.register-left img {
  width: 300px;
  margin-bottom: 20px;
}

.register-left h2 {
  color: #555;
  font-size: 1.8rem;
}

.register-left span {
  color: #5f8ce0;
}

.register-left p {
  font-size: 1rem;
  color: #333;
}

.register-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

form {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-register {
  background-color: #5f8ce0;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.terms {
  margin-bottom: 15px;
  font-size: 0.8rem;
  color: #555;
}

.terms a {
  color: #5f8ce0;
  text-decoration: none;
}

.social-register p {
  text-align: center;
  font-size: 0.85rem;
  margin-bottom: 10px;
  color: #777;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.social-icons button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-size: 22px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  cursor: pointer;
}

button.google {
  background-image: url('https://cdn-icons-png.flaticon.com/512/281/281764.png');
}

button.apple {
  background-image: url('https://cdn-icons-png.flaticon.com/512/831/831276.png');
}

button.facebook {
  background-image: url('https://cdn-icons-png.flaticon.com/512/733/733547.png');
}

.login-text {
  text-align: center;
  font-size: 0.85rem;
  color: #333;
}

.login-text a {
  text-decoration: none;
  color: #5f8ce0;
  font-weight: 600;
}
.link-button {
  background: none;
  border: none;
  padding: 0;
  margin-left: 4px;
  color: #5f8ce0;
  text-decoration: underline;
  font-size: 0.85rem;
  cursor: pointer;
}

</style>