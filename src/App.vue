<script>
import AppScrollTop from "./components/AppScrollTop.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default{
   name: "App",
   components: {
      AppScrollTop,
      AppHeader,
      AppMain,
      AppFooter      
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
