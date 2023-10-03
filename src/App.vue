<script>
import { state } from "./state.js";
import AppHeader from "./components/AppHeader.vue";

export default{
   name: "App",
   components: {
      AppHeader,
   },
   data (){
      return {
         state
      }
   }
}
</script>

<template>

   <AppHeader></AppHeader>

</template>

<style >

</style>
