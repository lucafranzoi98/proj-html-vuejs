<script>
import { state } from "../state.js";
import AppSubject from './AppSubject.vue';
import AppTutoring from "./AppTutoring.vue";
import AppChildren from "./AppChildren.vue";
import AppTestimonials from "./AppTestimonials.vue";
import AppOffers from "./AppOffers.vue";
import AppCourses from "./AppCourses.vue";
import AppPricing from "./AppPricing.vue";
import AppPartner from "./AppPartner.vue";

export default{
   name: "AppMain",
   components: {
      AppSubject,
      AppTutoring,
      AppChildren,
      AppTestimonials,
      AppOffers,
      AppCourses,
      AppPricing,
      AppPartner
   },
   data (){
      return {
         state
      }
   },
}
</script>

<template>
   <main>

      <div class="subject mx-5 d-flex justify-content-between">
         <AppSubject v-for="subject in state.subjects" :name="subject.name" :img="state.getImagePath(subject.img)"></AppSubject>
      </div>

      <AppTutoring></AppTutoring>

      <AppChildren></AppChildren>

      <AppTestimonials></AppTestimonials>
      
      <AppOffers></AppOffers>

      <AppCourses></AppCourses>

      <AppPricing></AppPricing>

      <AppPartner></AppPartner>
      
   </main>
</template>