<template>
    <div class="loginpage">
        <div class="signin">
        <div class="logo">
            <img src="@/assets/who_logo.png">
        </div>
        <div class="title" >
            <h1 class="tit-h1">Sign In</h1>
        </div>
        <div class="loginform">
            <v-form v-model="isValid">
                <v-col
                        cols="12"
                >
                    <v-text-field
                            v-model="username"
                            :error-messages="nameErrors"
                            :counter="10"
                            :rules="[rules.required]"
                            label="ID"
                            @keyup.enter="signIn"
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
                            @keyup.enter="signIn"
                    ></v-text-field>

                </v-col>
                <v-btn class="mr-4" @click="signIn" style="float: left" :disabled="!isValid">로그인</v-btn>
                <v-btn class="mr-4" @click="signInGuest">게스트로그인</v-btn>
                <br><br>
                <div class="signup-link">
                    who동아리원이 아니신가요? <router-link :to="{name: 'signup'}" tag="a">회원가입</router-link><br>
                  <router-link :to="{name: 'findid'}" tag="a">ID찾기</router-link>
                </div>
            </v-form>
        </div>
        </div>
    </div>

</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength} from 'vuelidate/lib/validators'
    import memberAPI from '@/api/member'

    export default {
        mixins: [validationMixin],
        validations: {
            username: { required, maxLength: maxLength(10) },
            password: { required, maxLength: maxLength(10) },
        },
        components:{
        },
        data: () => ({
            username: '',
            email: '',
            show: false,
            password: 'Password',
            isValid: true,
            checkword : '',
            rules: {
                  required: value => !!value || 'Required.',
                  min: v => v.length >= 8 || 'Min 8 characters',
              },
              pass: false,
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
              console.log(errors);
                return errors
            },

        },
        methods: {
            signIn () {

                 var temp = {
                   'username': this.username,
                   'password': this.password
                 }
                 memberAPI.login(temp)
                     .then(result => {
                       if (result.data.success == "login sucessfull") {
                         localStorage.setItem('pass', result.data.pass);
                         localStorage.setItem('userID', result.data.username);
                         this.checkword = result.data.success;
                         //console.log(result.data.username);
                         this.$router.replace({name: 'mainpage'})

                       }
                       else if(result.data.success == "ID and password does not match"){
                         alert("아이디와 패스워드가 일치하지 않습니다");
                       }
                       else{
                          alert("아이디가 존재하지 않습니다");
                       }
                     })

                //console.log("http밖");
                // for(let i = 0; i < this.$store.state.memberlist.length; i++) {
                //     if (this.username == this.$store.state.memberlist[i].username && this.password == this.$store.state.memberlist[i].password) {
                //         console.log(this.username + "님이 로그인하셨습니다");
                //         this.pass=true
                //         this.$store.commit('checkChange');
                //         localStorage.setItem('pass', this.pass);
                //         this.$router.push('/main');
                //     }
                // }
                // if(!this.pass) {
                //     alert("로그인을 실패하셨습니다");
                // }
            },
            signInGuest(){
                localStorage.setItem('pass', true);
                localStorage.setItem('userID', 'Guest');
                this.$store.commit('checkChange');
                this.$router.push('/main');
            }
        },


    }
</script>

<style scoped>
    .loginpage{
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