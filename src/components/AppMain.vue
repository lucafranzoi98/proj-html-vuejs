<script>
import AppSubject from './AppSubject.vue';
import { state } from "../state.js";

export default{
   name: "AppMain",
   components: {
      AppSubject,
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

      <section class="mx-5 tutoring">
         <h2>The Trusted Name<br>for In-Home Tutoring</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur nihil modi fugit, reprehenderit porro saepe eius consequatur, fugiat eum nostrum illum consectetur qui delectus unde quod cumque iusto atque. Non reiciendis nemo optio?</p>
         <a href="#" class="text-uppercase">Learn more</a>
         <img src="../assets/img/img/h5-img-1.jpg" alt="tutoring" class="d-block w-100">
      </section>

      <section class="mx-5 children d-flex">
         <img src="../assets/img/img/h5-img-2.jpg" alt="children">
         <div>
            <h2>Empowering Children to Reach Their Potential.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur nihil modi fugit, reprehenderit porro saepe eius consequatur, fugiat eum nostrum illum consectetur qui delectus unde quod cumque iusto atque. Non reiciendis nemo optio?</p>
            <div class="d-flex data">
               <div class="me-5">
                  <div class="numbers">168</div>
                  <div>User Stories</div>
               </div>
               <div>
                  <div class="numbers">347</div>
                  <div>Events</div>
               </div>

            </div>
         </div>
         
      </section>

      <section class="testimonials text-center text-white">

         <img :src="state.getImagePath(state.testimonials[state.activeTestimonial].img)" alt="testimonial" class="mb-5" width="150">
         <p>"{{ state.testimonials[state.activeTestimonial].text }}"</p>
         <h5>{{ state.testimonials[state.activeTestimonial].name }}</h5>
         <h6 class="text-uppercase fw-semibold">{{ state.testimonials[state.activeTestimonial].role }}</h6>
         <div class="d-flex justify-content-center">
            <div class="circle" @click="state.changeActiveTestimonial(0)" :class="state.activeTestimonial == 0 ? 'active' : ''"></div>
            <div class="circle mx-3" @click="state.changeActiveTestimonial(1)" :class="state.activeTestimonial == 1 ? 'active' : ''"></div>
            <div class="circle" @click="state.changeActiveTestimonial(2)" :class="state.activeTestimonial == 2 ? 'active' : ''"></div>
         </div>
      </section>
      
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
      
   </main>
</template>