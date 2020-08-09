import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/components/mainpage/MainPage";
import LoginPage from "@/components/member/LoginPage";
import SignupPage from "@/components/member/SignupPage";
import NoticePage from "@/components/noticepage/NoticePage";
import notFound from "@/components/404Page";
import NoticewordPage from "@/components/noticepage/NoticewordPage";
import IntroduceWho from "@/components/introduce/IntroduceWho";
import NoticeAdd from "@/components/noticepage/NoticeAdd";
import FindId from "@/components/member/FindId";
import NoticeModify from "@/components/noticepage/NoticeModify";



Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
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
      name: 'findid',
      path: '/findid',
      component: FindId,
    },
    {
      name: 'mainpage',
      path: '/main',
      component: MainPage,
      meta: {auth:true}
    },
    {
      name: 'introducewho',
      path: '/introducewho',
      component: IntroduceWho,
      meta: {auth:true}
    },
    {
      name: 'noticepage',
      path: '/noticepage',
      component: NoticePage,
      meta: {auth:true}
    },
    {
      name: 'noticewordpage',
      path: '/noticewordpage/:noticeindex',
      component: NoticewordPage,
      meta: {auth:true}
    },
    {
      name: 'noticeadd',
      path: '/noticeadd',
      component: NoticeAdd,
      meta: {auth:true}
    },
    {
      name: 'noticemodify',
      path: '/noticemodify',
      component: NoticeModify,
      meta: {auth:true},
      props: { boardContent: false }
    }

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
