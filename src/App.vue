<template>
  <v-app>
    <menu-bar v-if="$route.name !== 'login' && $route.name !== 'signup' && $route.name !== 'findid'" ></menu-bar>
    <router-view/>
  </v-app>
</template>

<script>
import MenuBar from "@/components/common/MenuBar"
export default {
  name: 'App',

  components: {
    'menu-bar': MenuBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>


</style>