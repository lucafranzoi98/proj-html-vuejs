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

      <div class="d-flex">
         <div class="col-3">
            <div class="save-up">
               <h4>Save up to 40% by paying weekly</h4>
            </div>
            <div class="plan-option" v-for="option in state.plansOptions.items">{{ option }}</div>
         </div>

         <div class="col-9">
            <div class="d-flex">
               <div class="col-4" v-for="plan in state.plans">
                  <div class="plans-name text-center">
                     <img :src="state.getImagePath(plan.img)" class="mb-3" width="120">
                     <h5>{{ plan.name }}</h5>
                     <h6>{{ plan.price }}</h6>
                  </div>
                  <div v-for="item in plan.items">
                     <div v-show="item != 'True' && item != 'False'" class="plan-data">{{ item }}</div>
                     <div v-show="item == 'True'" class="plan-data">
                        <img src="../assets/img/icons/check.png" height="26">
                     </div>
                     <div v-show="item == 'False'" class="plan-data">
                        <img src="../assets/img/icons/close.png" height="26">
                     </div>
                  </div>
               </div>
            </div>
            
            
            
         </div>
      </div>

   </section>

</template>