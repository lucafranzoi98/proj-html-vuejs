<script>
export default{
   name: "AppSubject",
   props: {
      img: String,
      name: String
   }
}
</script>

<template>

   <div class="subject-item text-center">
      <img :src="img" alt="subject" class="mb-5" width="80">
      <h5>{{ name }}</h5>
   </div>

</template>