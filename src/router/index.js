import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import NewUser from '../components/NewUser.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      //{
        //path: "/by-name/:name?",
        //name: "byName",
        //component: MealsByName,
      //}
    ]
  },
  {
    
        path: "/newUser",
        name: "newUser",
        component: NewUser,
      
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;