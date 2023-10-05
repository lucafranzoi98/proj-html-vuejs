<script>
import { state } from "../state.js";

export default{
   name: "AppFooter",
   data (){
      return {
         state
      }
   }
}
</script>

<template>

   <footer class="px-5">

      <div class="d-flex upper-footer">

         <div class="col-3 pe-5">
            <a href="#"><img src="../assets/img/img/logo-light.png" width="200" class="mb-5 mt-1"></a>
            <p class="mb-5">Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</p>
            <div class="mb-4">
               <img src="../assets/img/icons/incoming-call.png" width="20" class="me-3">
               <span>1-677-124-44227</span>
            </div>
            <div>
               <img src="../assets/img/icons/clock.png" width="20" class="me-3">
               <span>Mon - Sat 8.00 - 18.00</span>
            </div>
         </div>

         <div class="col-3">
            <div class="footer-page mb-4">
               {{ state.footerCourses.name }}
            </div>
            <div v-for="course in state.footerCourses.courses" class="course-name mb-4">
               <a href="#">{{ course.name }}</a>
               <div class="course-teacher mt-2">{{ course.teacher }}</div>
            </div>
         </div>

         <div class="col-3">
            <div class="footer-page">
               <div class="mb-4">{{ state.footerSupport.name }}</div>
               <div v-for="voice in state.footerSupport.voices" class="support-voice mb-3">
                  <a href="#">{{ voice }}</a>
               </div>
            </div>
         </div>

         <div class="col-3">            
            <div class="footer-page mb-4">Flexible Learning</div>
            <img src="../assets/img/img/footer-img-1.png" width="250">
         </div>
         
      </div>
       
      <div class="lower-footer d-flex justify-content-between">
         <div>Copyrights 2017 @Mikado Themes</div>
         <div class="d-flex">
            <div class="text-uppercase">Call +44 300 303 0266</div>
            <div class="text-uppercase mx-4">Follow Us</div>
            <a href="#"><img src="../assets/img/icons/twitter.png" width="20"></a>
            <a href="#" class="mx-4"><img src="../assets/img/icons/instagram.png" width="20"></a>
            <a href="#"><img src="../assets/img/icons/facebook.png" width="20"></a>
         </div>
      </div>

   </footer>

</template>