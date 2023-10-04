<script>
import { state } from "../state.js"

export default{
   name: "AppTestimonials",
   data(){
      return{
         state
      }
   }
}
</script>

<template>

   <section class="testimonials text-center text-white">
      <div v-for="(testimonial, i) in state.testimonials" v-show="state.activeTestimonial == i">
         <img :src="state.getImagePath(testimonial.img)" alt="testimonial" class="mb-5" width="150">
         <p>"{{ testimonial.text }}"</p>
         <h5>{{ testimonial.name }}</h5>
         <h6 class="text-uppercase fw-semibold">{{ testimonial.role }}</h6>
         <div class="d-flex justify-content-center">
            <div class="circle" @click="state.changeActiveTestimonial(0)" :class="state.activeTestimonial == 0 ? 'active' : ''"></div>
            <div class="circle mx-3" @click="state.changeActiveTestimonial(1)" :class="state.activeTestimonial == 1 ? 'active' : ''"></div>
            <div class="circle" @click="state.changeActiveTestimonial(2)" :class="state.activeTestimonial == 2 ? 'active' : ''"></div>
         </div>
      </div>
   </section>

</template>