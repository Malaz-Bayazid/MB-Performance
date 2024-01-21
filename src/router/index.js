import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import NewUser from '../components/NewUser.vue'
import UserDetails from '../components/UserDetails.vue'

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
      
  },
  {
    path: '/user/:id',
    name: 'userDetails',
    component: UserDetails
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;