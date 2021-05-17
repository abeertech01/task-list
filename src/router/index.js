import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/mainList';
const Login = import('../views/Login');
const Signup = import('../views/Signup');

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
