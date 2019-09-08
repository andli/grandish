<template>
  <div>
    <b-form @submit.prevent="registerSubmit" :state="validation">
      <p v-if="registerError">{{ registerError }}</p>
      <p v-if="registerSuccessful">Registered successfully</p>
      <b-form-group
        id="fieldset-1"
        label="Enter your nick"
        label-for="input-nick"
        :invalid-feedback=invalidFeedback
        :valid-feedback=validFeedback
      >
        <b-form-input id="input-nick" v-model="nick" ></b-form-input>

      </b-form-group>

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
          <b-spinner small v-if="registering"></b-spinner> Register
        </b-button>
        <router-link to="/" class="btn btn-link">Back</router-link>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      nick: "",
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
    ...mapActions(["doRegister"]),
    registerSubmit() {
      this.doRegister({
        nick: this.nick,
        email: this.email,
        password: this.password
      });
    }
  },
  
  
};
</script>