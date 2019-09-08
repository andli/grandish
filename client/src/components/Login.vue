<!-- eve.holt@reqres.in cityslicka -->

<template>
  <div>
    <b-form @submit.prevent="loginSubmit" :state="validation">
      <b-alert show variant="warning" v-if="loginError">{{ loginError }}</b-alert>
      <b-alert show variant="success" v-if="loginSuccessful">Login Successful</b-alert>
      <b-form-group
        id="fieldset-1"
        label="Enter your email"
        label-for="input-email"
        :invalid-feedback=invalidFeedback
        :valid-feedback=validFeedback
      >
        <b-form-input id="input-email" v-model="email" ></b-form-input>

      </b-form-group>
      <b-form-group
        id="fieldset-1"
        label="Enter your password"
        label-for="input-password"
        :invalid-feedback=invalidFeedback
        :valid-feedback=validFeedback
      >
        <b-form-input id="input-password" type="password" v-model="password"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-button type="submit" variant="primary">
          <b-spinner small v-if="loggingIn"></b-spinner> Login
        </b-button>
        <router-link to="/register" class="btn btn-link">Register</router-link>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState([
      "loggingIn", 
      "loginError", 
      "loginSuccessful"
    ]),
    invalidFeedback() {
      if (this.email.length > 4) {
        return "";
      } else if (this.email.length > 0) {
        return "Enter at least 4 characters";
      } else {
        return "Please enter something";
      }
    },
    validFeedback() {
      return this.state === true ? "Looks good" : "";
    },
    validation() {
      return this.email.length >= 4 ? true : false;
    }
  },
  methods: {
    ...mapActions(["login"]),
    loginSubmit() {
      this.login({
        email: this.email,
        password: this.password
      });
    }
  },
  
  
};
</script>