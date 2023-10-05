<script>
import { state } from "./state.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppScrollTop from "./components/AppScrollTop.vue";

export default{
   name: "App",
   components: {
      AppHeader,
      AppMain,
      AppFooter,
      AppScrollTop
   },
   data (){
      return {
         state
      }
   }
}
</script>

<template>

   <AppScrollTop></AppScrollTop>

   <AppHeader></AppHeader>

   <AppMain></AppMain>

   <AppFooter></AppFooter>

</template>

<style >

</style>
