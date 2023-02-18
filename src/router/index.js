import { createRouter, createWebHistory } from 'vue-router';
import Default from '../components/Default.vue';
import Home from '../pages/Home.vue';
import FilterByCategory from '../pages/FilterByCategory.vue';
import FilterByName from '../pages/FilterByName.vue';
import MealDetails from '../pages/MealDetails.vue';
import Categories from '../pages/Categories.vue'

const routes = [
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/categories',
                name: 'categories',
                component: Categories,
            },
            {
                path: '/category/:category?',
                name: 'category',
                component: FilterByCategory,
            },
            {
                path: '/name/:name?',
                name: 'name',
                component: FilterByName,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails,
            }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;