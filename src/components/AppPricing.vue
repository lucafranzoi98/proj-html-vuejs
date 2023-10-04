<script>
import { state } from "../state.js";
export default{
   name: "AppPricing",
   data(){
      return {
         state
      }
   }
}
</script>

<template>

   <section class="pricing px-5">
      <h2 class="text-center">Pricing Plans</h2>
      <p class="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

      <div class="row">
         <div class="col-3">
            <div class="row save-up">
               <h4>Save up to 40% by paying weekly</h4>
            </div>
            <div v-for="option in state.plansOptions.items" class="row">{{ option }}</div>
         </div>

         <div class="col-9">
            <div class="row">
               <div class="col-4" v-for="plan in state.plans">
                  <div class="row plans-name text-center">
                     <img :src="state.getImagePath(plan.img)" class="mb-3">
                     <h5>{{ plan.name }}</h5>
                     <h6>{{ plan.price }}</h6>
                  </div>
                  <div class="row" v-for="item in plan.items">
                     {{ item }}
                  </div>
               </div>
            </div>
            
            
            
         </div>
      </div>

   </section>

</template>