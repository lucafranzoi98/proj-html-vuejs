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

   <nav class="p-5 d-flex align-items-center justify-content-between">
      <a href="#"><img src="../assets/img/img/logo-light.png" alt="iacademy-logo" width="250"></a>
      <div class="d-flex justify-content-between mx-5">
         <a href="#" v-for="item in state.navbarItems" class="text-white text-uppercase fw-medium mx-4">{{ item }}</a>
      </div>
      <div class="d-flex align-items-center">
         <a href="#"><img src="../assets/img/icons/search.png" alt="seach" height="28"></a>
         <a href="#" class="position-relative mx-5">            
            <img src="../assets/img/icons/market.png" alt="shopping-cart" height="30">
            <div class="shopping-cart-number d-flex align-items-center justify-content-center">
               <span>0</span>
            </div>
         </a>
         <a href="#"><img src="../assets/img/icons/menu.png" alt="menu" height="24" class="mt-2"></a>
      </div>
   </nav>

</template>