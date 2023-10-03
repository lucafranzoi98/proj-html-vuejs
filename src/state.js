import { reactive } from "vue";

export const state = reactive({
   navbarItems: [
      "Home", "Courses", "Instructors", "Events", "Pages", "Elements"
   ],
   subjects: [
      {
         name: "Languages",
         img: "h5-custom-icon-1.png"
      },
      {
         name: "Software",
         img: "h5-custom-icon-2.png"
      },
      {
         name: "Business",
         img: "h5-custom-icon-3.png"
      },
      {
         name: "Chemistry",
         img: "h5-custom-icon-4.png"
      },
      {
         name: "Science",
         img: "h5-custom-icon-5.png"
      },
      {
         name: "DIY&Craft",
         img: "h5-custom-icon-6.png"
      }
   ],
   getImagePath(img){
      return new URL(`./assets/img/img/${img}`, import.meta.url).href;
   }
})