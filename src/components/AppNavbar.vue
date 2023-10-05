<script>
import { state } from "../state.js"

export default{
   name: "AppNavbar",
   data(){
      return {
         state
      }
   }
}
</script>

<template>

   <nav class="d-flex align-items-center justify-content-between">

      <!-- Logo -->
      <a href="#"><img src="../assets/img/img/logo-light.png" alt="iacademy-logo" width="250"></a>

      <!-- Menu -->
      <div class="d-flex justify-content-between mx-5">
         <a href="#" v-for="item in state.navbar" class="text-white text-uppercase mx-4">{{ item }}</a>
      </div>

      <!-- Right Icons -->
      <div class="d-flex align-items-center">
         <a href="#"><img src="../assets/img/icons/search.png" alt="search" height="28"></a>
         <a href="#" class="position-relative mx-5">            
            <img src="../assets/img/icons/market.png" alt="shopping-cart" height="30">
            <div class="shopping-cart-number d-flex align-items-center justify-content-center">0</div>
         </a>
         <a href="#"><img src="../assets/img/icons/menu.png" alt="menu" height="24" class="mt-2"></a>
      </div>
      
   </nav>

</template>