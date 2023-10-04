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
         <AppCourseCard v-for="course in state.courses[state.activeCourse]" :img="state.getImagePath(course.img)" :name="course.name" :teacher="course.teacher" :price="course.price" :text="course.text" :number="course.number" :tag="course.tag" :colorBadge="course.price == 'Free' ? 'free-course' : 'text-bg-warning'"></AppCourseCard>
      </div>
      <div class="d-flex justify-content-center">
         <div class="circle" @click="state.changeActiveCourse(0)" :class="state.activeCourse == 0 ? 'active' : ''"></div>
         <div class="circle mx-3" @click="state.changeActiveCourse(1)" :class="state.activeCourse == 1 ? 'active' : ''"></div>
         <div class="circle" @click="state.changeActiveCourse(2)" :class="state.activeCourse == 2 ? 'active' : ''"></div>
      </div>
   </section>

</template>