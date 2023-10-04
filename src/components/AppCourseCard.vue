<script>
export default{
   name: "AppCourseCard",
   props: {
      img: String,
      name: String,
      price: String,
      teacher: String,
      text: String,
      number: String,
      tag: String,
      colorBadge: String
   }
}
</script>

<template>

   <div class="col">
      <div class="card rounded-0">
         <img :src="img" class="card-img-top rounded-0 mb-3">
         <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
               <h5>{{name}}</h5>
               <div class="badge rounded-pill text-white text-uppercase my-badge" :class="colorBadge">{{price}}</div>
            </div>
            <h6>{{ teacher }}</h6>
            <p class="card-text">{{ text }}</p>
            <div class="tags d-flex text-uppercase mb-3">
               <div class="me-3">
                  <img src="../assets/img/icons/user.png" width="20" class="me-2">
                  <span>{{ number }}</span>
               </div>
               <div>
                  <img src="../assets/img/icons/price-tag.png" width="20" class="me-2">
                  <span>{{ tag }}</span>
               </div>
            </div>
         </div>
      </div>
   </div>

</template>