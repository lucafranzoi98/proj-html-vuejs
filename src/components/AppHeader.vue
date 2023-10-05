<script>
import { state } from "../state.js";
import AppNavbar from './AppNavbar.vue';
import AppJumbotron from './AppJumbotron.vue';

export default{
   name: "AppHeader",
   components: {
      AppNavbar,
      AppJumbotron,
   },
   data(){
      return {
         state
      }
   },
}
</script>

<template>

   <header>

      <!-- Background Img -->
      <div class="background" v-for="(header, i) in state.headerCarousel" :style="{'background-image': 'url(' + (state.getImagePath(header)) + ')'}" v-show="state.activeHeader == i">
      </div>
      
      <!-- Dark layer -->
      <div class="dark-layer d-flex flex-column justify-content-between p-5">

         <AppNavbar></AppNavbar>

         <AppJumbotron></AppJumbotron> 

         <!-- Bottom circles -->
         <div class="d-flex justify-content-center align-items-center">

            <div class="circle mx-2" v-for="(, i) in state.headerCarousel" @click="state.changeActiveHeader(i)" :class="state.activeHeader == i ? 'active' : ''">
               <div v-if="state.activeHeader == i" class="active-element"></div>
            </div>
            
         </div>
      </div>          
      
   </header>

</template>