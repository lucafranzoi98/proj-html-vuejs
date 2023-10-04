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

         <img src="../assets/img/img/testimonials-standard-2.png" alt="testimonial" class="mb-5" width="150">
         <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae."</p>
         <h5>Joan Collins</h5>
         <h6 class="text-uppercase fw-semibold">Student</h6>
         <div class="d-flex justify-content-center">
            <div class="circle"></div>
            <div class="circle active mx-3"></div>
            <div class="circle"></div>
         </div>
      </section>
      
   </main>
</template>