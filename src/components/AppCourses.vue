<script>
import { state } from "../state.js";
import AppCourseCard from "./AppCourseCard.vue";

export default {
   name: "AppCourses",
   components: {
      AppCourseCard,
   },
   data(){
      return {
         state
      }
   }
}
</script>

<template>

   <section class="courses">
      <h2 class="text-center">Popular Online Courses</h2>
      <p class="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad culpa aliquam dignissimos similique adipisci debitis labore dolore corporis reiciendis voluptate?</p>
      <div class="row row-cols-3 mx-5">
         <AppCourseCard v-for="course in state.courses[state.activeCourse]" :img="state.getImagePath(course.img)" :name="course.name" :teacher="course.teacher" :price="course.price" :text="course.text" :number="course.number" :tag="course.tag"></AppCourseCard>
      </div>
   </section>

</template>