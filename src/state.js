import { reactive } from "vue";

export const state = reactive({
   navbarItems: [
      "Home", "Courses", "Instructors", "Events", "Pages", "Elements"
   ],
   headerCarousel: [
      "src/assets/img/img/course-6-f-img.jpg",
      "src/assets/img/img/course-11-f-img.jpg",
      "src/assets/img/img/course-9-f-img.jpg"
   ],
   activeHeader: 2,
   changeActiveHeader(n){
      this.activeHeader = n;
   },
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
   testimonials: [
      {
         img: "testimonials-standard-1.png",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae.",
         name: "Rita Margell",
         role: "Teacher"
      },
      {
         img: "testimonials-standard-2.png",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae possimus quia odit accusantium, ipsam sequi, ratione praesentium eaque vitae commodi suscipit quam error accusamus optio? Quis, porro odio doloremque placeat voluptate molestias, necessitatibus aperiam, veritatis non ipsa ullam tempora distinctio!",
         name: "Joan Collins",
         role: "Student"
      },
      {
         img: "testimonials-standard-3.png",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis repudiandae quisquam quo eaque facilis eveniet accusamus iure repellendus voluptates. Dolor temporibus recusandae dolorum obcaecati autem voluptatem praesentium esse accusamus eaque, ipsum incidunt, nemo porro corporis.",
         name: "Robert Naor",
         role: "CEO"
      }
   ],
   activeTestimonial: 1,
   changeActiveTestimonial(n){
      this.activeTestimonial = n;
   },
   offers:[
      {
         name: "What We Do",
         title: "Learning Possibilities",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae.",
         points: [
            "We enrich lives through learning.",
            "Maximizing potential through individual attention.",
            "The trusted name for specialized training.",
            "People teach. People learn. This is where they connect."
         ],
         icon: "h12-tabs-icon-1.png",
      },
      {
         name: "Degree Programme",
         title: "Degree Programme",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae.",
         points: [
            "Degree Programme 1",
            "Degree Programme 2",
            "Degree Programme 3",
            "Degree Programme 4"
         ],
         icon: "h12-tabs-icon-2.png",
      },
      {
         name: "Career Achievements",
         title: "Career Achievements",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae.",
         points: [
            "Career Achievements 1",
            "Career Achievements 2",
            "Career Achievements 3",
            "Career Achievements 4"
         ],
         icon: "h12-tabs-icon-3.png",
      },
      {
         name: "Personal Managment",
         title: "Personal Managment",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae.",
         points: [
            "Personal Managment 1",
            "Personal Managment 2",
            "Personal Managment 3",
            "Personal Managment 4"
         ],
         icon: "h12-tabs-icon-4.png",
      },
      {
         name: "Steps To Success",
         title: "Steps To Success",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae.",
         points: [
            "Steps To Success 1",
            "Steps To Success 2",
            "Steps To Success 3",
            "Steps To Success 4"
         ],
         icon: "h12-tabs-icon-5.png",
      },
      {
         name: "Knowledge Transfer",
         title: "Knowledge Transfer",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quam nemo laborum amet repellat iure assumenda accusamus debitis beatae.",
         points: [
            "Knowledge Transfer 1",
            "Knowledge Transfer 2",
            "Knowledge Transfer 3",
            "Knowledge Transfer 4"
         ],
         icon: "h12-tabs-icon-6.png",
      },

   ],
   activeOffer: 0,
   getImagePath(img){
      return new URL(`./assets/img/img/${img}`, import.meta.url).href;
   },
   changeActiveOffer(i){
      this.activeOffer = i;
   }
})