<template>
  <div class="findidpage">
    <div class="findid">
      <div class="logo">
        <img src="@/assets/who_logo.png">
      </div>
      <div class="title" >
        <h1 class="tit-h1">Find ID</h1>
      </div>
      <div class="findidform">
        <v-form v-model="isValid">
          <v-col
              cols="12"
          >
            <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required="required"
                :rules="emailRules"
                v-on:keyup.enter="findID"
            ></v-text-field>

          </v-col>
          <v-btn class="mr-4" @click="findID" :disabled="!isValid">찾기</v-btn>
          <app-my-modal
              :title="username"
              :visible.sync="visible">
          </app-my-modal>
          <div class="login-link">
            <br><br>
             <router-link :to="{name: 'login'}" tag="a">로그인화면으로</router-link>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email} from 'vuelidate/lib/validators'
import memberAPI from "@/api/member"
import myModal from "./FindIdmyModal"

export default {
  mixins: [validationMixin],
  validations: {
    email: {
      required,
      email
    },
  },
  components:{
    'app-my-modal':myModal
  },
  data: () => ({
    visible: false,
    email: '',
    show: false,
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/. test(v) || 'E-mail must be valid'
    ],
    pass: true,
    isValid: true,
    username: ''
  }),
  computed: {

    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty)
        return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },

  },
  methods: {
    findID () {
      var temp = {
        'email': this.email
      }
      memberAPI.findid(temp)
          .then(result => {
            this.username = result.data;
          })
      this.visible = !this.visible
    },
  },

}
</script>

<style scoped>
.findidpage{
  display: table;
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  vertical-align: middle;
  margin-top: 100px;
}
.logo{
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 32px;
  padding: 0 0 12px;
  color: #47556e;
  border-bottom: 4px solid #4a8cff;

}
.tit-h1{
  font-size: 24px;
  margin: 0 0 40px;
  color: #161a21;

}
</style>