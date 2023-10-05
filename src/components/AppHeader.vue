<script>
import AppNavbar from './AppNavbar.vue';
import AppJumbotron from './AppJumbotron.vue';
import { state } from "../state.js";

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

      <div class="background" v-for="(header, i) in state.headerCarousel" :style="{'background-image': 'url(' + (state.getImagePath(header)) + ')'}" v-show="state.activeHeader == i">
      </div>
      
      <div class="darker-layer d-flex flex-column justify-content-between p-5">

         <AppNavbar></AppNavbar>

         <AppJumbotron></AppJumbotron> 

         <div class="d-flex justify-content-center align-items-center">

            <div class="circle mx-2" v-for="(, i) in state.headerCarousel" @click="state.changeActiveHeader(i)" :class="state.activeHeader == i ? 'active' : ''">
               <div v-if="state.activeHeader == i" class="active-element"></div>
            </div>
            
         </div>
      </div>          
      
   </header>

</template>