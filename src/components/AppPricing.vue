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

      <div class="d-flex position-relative">

         <div class="position-absolute floating-icon">
            <div class="payment mb-3 shadow-sm">
               <img src="../assets/img/svg/svg-0.svg" width="36">
            </div>
            <div class="chart d-flex justify-content-center align-items-center shadow-sm">
               <img src="../assets/img/svg/svg-2.svg" width="22">
            </div>
         </div>

         <div class="col-3">
            <div class="save-up">
               <h4>Save up to 40% by paying weekly</h4>
            </div>
            <div class="plan-option" v-for="option in state.plansOptions.items">{{ option }}</div>
         </div>

         <div class="col-9">
            <div class="d-flex">
               <div class="col-4" v-for="(plan, i) in state.plans">
                  <div class="plans-name text-center" :class="state.activePlan == i ? 'active-plan' : ''" @click="state.changeActivePlan(i)">
                     <img :src="state.getImagePath(plan.img)" class="mb-3" width="130">
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
                  <div class="plan-button">
                     <a href="#" class="text-uppercase fw-bold" >Get it now</a>
                  </div>
               </div>
            </div>
            
            
            
         </div>
      </div>

   </section>

</template>