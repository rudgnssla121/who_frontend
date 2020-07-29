import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/components/mainpage/MainPage";
import LoginPage from "@/components/member/LoginPage";
import SignupPage from "@/components/member/SignupPage";
import NoticePage from "@/components/noticepage/NoticePage";
import store from "@/store"

Vue.use(VueRouter)

  const routes = [
    {
      name: 'main',
      path: '*',
      component: LoginPage,
    },
    {
      name: 'login',
      path: '/login',
      component: LoginPage,
    },
    {
      name: 'signup',
      path: '/signup',
      component: SignupPage,
    },
    {
      name: 'mainpage',
      path: '/main',
      component: MainPage,
      meta: {auth:true}
    },
    {
      name: 'noticepage',
      path: '/noticepage',
      component: NoticePage,
      meta: {auth:true}
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) =>{
    let auth = to.matched.some(routeInfo =>  {
      return routeInfo.meta.auth;
    });

  // if(auth && !store.getters.authenticated) {
  if(auth && !store.state.check) {
    next({name: 'login', replace: true});
    return;
  }

  next();

});

export default router
