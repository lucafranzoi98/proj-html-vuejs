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

   <div class="subject-item py-5 text-center">
      <img :src="img" alt="subject" class="mb-4">
      <h5>{{ name }}</h5>
   </div>

</template>