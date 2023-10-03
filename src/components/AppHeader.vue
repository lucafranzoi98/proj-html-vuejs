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

         <div class="d-flex justify-content-center align-items-center">
            <a href="#" class="circle"></a>
            <a href="#" class="circle mx-3"></a>
            <a href="#" class="circle active"><div class="active-element"></div></a>
         </div>
      </div>          
      
   </header>

</template>