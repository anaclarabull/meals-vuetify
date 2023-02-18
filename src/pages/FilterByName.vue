<template>
    <div>
        <input type="text" v-model="keyword"
            placeholder="Encontre sua receita..." @change="searchMeals" />
    </div>
    <div>
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>


<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
import store from '../store';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);


function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})

</script>