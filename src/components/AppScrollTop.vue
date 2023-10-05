<script>
import { state } from "../state.js";
export default{
   name: "AppScrollTop",
   data(){
      return{
         state
      }
   }
}
</script>

<template>

   <!-- Button in bottom right corner -->
   <a href="#" class="scroll-top d-flex flex-column justify-content-center align-items-center" @click="state.scrollTop()">
      <img src="../assets/img/icons/up-arrows.png" width="20">
      <div class="text-uppercase">Top</div>
   </a>

</template>