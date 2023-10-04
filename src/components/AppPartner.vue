<script>
import { state } from "../state.js";

export default{
   name: "AppPartner",
   data(){
      return {
         state
      }
   }
}
</script>

<template>

   <section class="mx-5 partners">
      <div class="d-flex">
         <div v-for="partner in state.partners" class="col-3">
            <img :src="state.getImagePath(partner)" class="w-100">
         </div>
      </div>
   </section>

</template>