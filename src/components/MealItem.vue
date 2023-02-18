<template>
    <div>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">

        <div>
            <p>{{ meal.strMeal }}</p>
            <div>
                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                    Detalhes
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>