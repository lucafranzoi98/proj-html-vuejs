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
   }
}
</script>

<template>

   <header :style="{'background-image': 'url(' + (state.headerCarousel[state.activeHeader]) + ')'}">
      
      <div class="darker-layer d-flex flex-column justify-content-between p-5">

         <AppNavbar></AppNavbar>

         <AppJumbotron></AppJumbotron> 

         <div class="d-flex justify-content-center align-items-center">
            <div class="circle" @click="state.changeActiveHeader(0)" :class="state.activeHeader == 0 ? 'active' : ''">
               <div v-if="state.activeHeader == 0" class="active-element"></div>
            </div>
            <div class="circle mx-3" @click="state.changeActiveHeader(1)" :class="state.activeHeader == 1 ? 'active' : ''">
               <div v-if="state.activeHeader == 1" class="active-element"></div>
            </div>
            <div class="circle" @click="state.changeActiveHeader(2)" :class="state.activeHeader == 2 ? 'active' : ''">               
               <div v-if="state.activeHeader == 2" class="active-element"></div>
            </div>
         </div>
      </div>          
      
   </header>

</template>