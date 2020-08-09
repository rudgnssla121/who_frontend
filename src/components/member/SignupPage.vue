<template>
    <div class="signuppage">
        <div class="signun">
            <div class="logo">
                <img src="@/assets/who_logo.png">
            </div>
            <div class="title" >
                <h1 class="tit-h1">Sign Up</h1>
            </div>
        <div class="signupform">
            <v-form v-model="isValid">
                <v-col
                        cols="12"
                >
                    <v-text-field
                            v-model="username"
                            :error-messages="nameErrors"
                            :counter="10"
                            :rules="[rules.required]"
                            label="Name"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="password"
                            :error-messages="passwordErrors"
                            label="PassWord"
                            required
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show ? 'text' : 'password'"
                            hint="At least 8 characters"
                            value=""
                            class="input-group--focused"
                            @click:append="show = !show"

                    ></v-text-field>
                    <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required="required"
                            :rules="emailRules"
                            v-on:keyup.enter="signUp"
                    ></v-text-field>

                </v-col>
                <v-btn class="mr-4" @click="signUp" :disabled="!isValid">회원가입</v-btn>
            </v-form>
        </div>
        </div>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email} from 'vuelidate/lib/validators'
    import memberAPI from "@/api/member"

    export default {
        mixins: [validationMixin],
        validations: {
            username: { required, maxLength: maxLength(10) },
            password: { required, maxLength: maxLength(10) },
            email: {
                required,
                email
            },
        },
        components:{
        },
        data: () => ({
            username: '',
            email: '',
            show: false,
            password: 'Password',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
            },
            emailRules: [
              v => !!v || 'Email is required',
              v => /.+@.+/. test(v) || 'E-mail must be valid'
            ],
            pass: true,
            isValid: true
        }),
        computed: {
            nameErrors () {
                const errors = []
                if (!this.$v.username.$dirty) return errors
                !this.$v.username.maxLength && errors.push('Name must be at most 10 characters long')
                !this.$v.username.required && errors.push('Name is required.')
                return errors
            },
            passwordErrors () {
                const errors = []
                if (!this.$v.password.$dirty) return errors
                !this.$v.password.maxLength && errors.push('password must be at most 10 characters long')
                !this.$v.password.required && errors.push('password is required.')
                return errors
            },
            emailErrors() {
                const errors = []
                if (!this.$v.email.$dirty)
                    return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            },
            dataSet(){
                const data = {
                    username:this.username,
                    password:this.password,
                    email:this.email};
                return data;
            }
        },
        methods: {
            signUp () {
                var temp = {
                  'username': this.username,
                  'password': this.password,
                  'email': this.email
                }
                memberAPI.signup(temp)
                  .then(result => {
                    if(result.data.pass){
                      this.$router.push('/login');
                    }
                    else if(result.data.success == "error"){
                      alert("중복된 아이디입니다. 다시 입력해주세요");
                    }

                  })

                // for(let i = 0; i < this.$store.state.memberlist.length; i++) {
                //     if (this.username == this.$store.state.memberlist[i].username) {
                //         this.pass = false;
                //     }
                // }
                // if(this.pass) {
                //     this.$store.dispatch('listAdd', this.dataSet);
                //     this.$router.push('/login');
                // }
                // else {
                //     alert("이미 존재하는 아이디입니다. 다시 작성해주세요");
                //     this.pass = true;
                // }
            },
        },

    }
</script>

<style scoped>
    .signuppage{
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