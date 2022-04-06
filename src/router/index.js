import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Users from '../components/Users.vue';

const myroutes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About-us',
        component: About
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    }
];
const router = createRouter({
    history: createWebHistory(process.env.Base_Url),
    routes: myroutes
});
export default router;