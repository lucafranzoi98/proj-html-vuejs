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

      <div class="my-5 mx-5 d-flex justify-content-between">
         <AppSubject v-for="subject in state.subjects" :name="subject.name" :img="state.getImagePath(subject.img)"></AppSubject>
      </div>

      <section class="mx-5 tutoring">
         <h2>The Trusted Name<br>for In-Home Tutoring</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur nihil modi fugit, reprehenderit porro saepe eius consequatur, fugiat eum nostrum illum consectetur qui delectus unde quod cumque iusto atque. Non reiciendis nemo optio?</p>
         <a href="#" class="text-uppercase">Learn more</a>
         <img src="../assets/img/img/h5-img-1.jpg" alt="tutoring" class="d-block w-100">
      </section>
      
   </main>
</template>