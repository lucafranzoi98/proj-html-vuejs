<script>
import { state } from "./state.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default{
   name: "App",
   components: {
      AppHeader,
      AppMain,
      AppFooter
   },
   data (){
      return {
         state
      }
   }
}
</script>

<template>

   <a href="#" class="scroll-top d-flex flex-column justify-content-center align-items-center" @click="state.scrollTop()">
      <img src="./assets/img/icons/up-arrows.png" width="20">
      <div class="text-uppercase">Top</div>
   </a>

   <AppHeader></AppHeader>

   <AppMain></AppMain>

   <AppFooter></AppFooter>

</template>

<style >

</style>
