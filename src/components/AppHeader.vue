<script>
import AppNavbar from './AppNavbar.vue';
import AppJumbotron from './AppJumbotron.vue';

export default{
   name: "AppHeader",
   components: {
      AppNavbar,
      AppJumbotron
   }
}
</script>

<template>

   <header>
      
      <div class="darker-layer d-flex flex-column justify-content-between p-5">

         <AppNavbar></AppNavbar>

         <AppJumbotron></AppJumbotron> 

         <div>CIAO</div>
      </div>          
      
   </header>

</template>