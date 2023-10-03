<script>
import AppNavbar from './AppNavbar.vue';

export default{
   name: "AppHeader",
   components: {
      AppNavbar
   }
}
</script>

<template>

   <header>
      
      <div class="darker-layer">
         <AppNavbar></AppNavbar>
      </div>
      
      
   </header>

</template>