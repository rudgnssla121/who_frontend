import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/components/mainpage/MainPage";
import LoginPage from "@/components/member/LoginPage";
import SignupPage from "@/components/member/SignupPage";
import NoticePage from "@/components/noticepage/NoticePage";
import store from "@/store"
import notFound from "@/components/404Page"

Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: '/404',
    },
    {
      path: '/404',
      component: notFound
    },
    {
      name: 'login',
      path: '/',
      component: LoginPage,
    },
    {
      path: '/login',
      redirect: '/'
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
  if(auth && !localStorage.getItem('pass')) {
    next({name: 'login', replace: true});
    return;
  }

  next();

});

export default router
