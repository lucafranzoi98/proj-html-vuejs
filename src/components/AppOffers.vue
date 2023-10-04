<script>
import { state } from "../state.js"

export default{
   name: "AppOffers",
   data(){
      return{
         state
      }
   }
}
</script>

<template>

   <section class="offers mx-5 d-flex">
      <div class="d-flex gap-5">
         <div>
            <div class="offer-item" v-for="(offer, i) in state.offers" @click="state.changeActiveOffer(i)" :class="i == state.activeOffer ? 'active-offer' : ''">{{ offer.name }}</div>
         </div>
         <div class="me-5">
            <h2>{{ state.offers[state.activeOffer].title }}</h2>
            <p>{{ state.offers[state.activeOffer].text }}</p>
            <div class="d-flex align-items-end">
               <div>
                  <div v-for="point in state.offers[state.activeOffer].points" class="point">
                     <img src="../assets/img/icons/check.png" width="24">
                     <span>{{ point }}</span> 
                  </div>
               </div>                  
               <img :src="state.getImagePath(state.offers[state.activeOffer].icon)" alt="icon" class="icon">
            </div>
            
         </div>
      </div>
   </section>

</template>