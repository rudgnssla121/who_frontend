<template>
  <v-app>
    <app-header v-if="$route.name !== 'login' && $route.name !== 'signup' && $route.name !== 'findid'"></app-header>
   <div class="main">
    <menu-bar v-if="$route.name !== 'login' && $route.name !== 'signup' && $route.name !== 'findid'" ></menu-bar>
    <router-view/>

   </div>

    <app-footer v-if="$route.name !== 'login' && $route.name !== 'signup' && $route.name !== 'findid'"></app-footer>
  </v-app>
</template>

<script>
import MenuBar from "@/components/common/MenuBar"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer";

export default {
  name: 'App',

  components: {
    'menu-bar': MenuBar,
    'app-header': Header,
    'app-footer': Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.main{
  float: left;
  width : 100%;
  box-sizing : border-box;
  height: fit-content;
  clear: both;
}


</style>