<template>
    <v-card class="mx-auto" max-width="344">
        <div>
            <v-img :src="meal.strMealThumb" :alt="meal.strMeal" height="200px" cover></v-img>

            <v-card-title>
                <p>{{ meal.strMeal }}</p>
            </v-card-title>
            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                        Detalhes
                    </router-link>
                </v-btn>
            </v-card-actions>

        </div>
    </v-card>
</template>

<script setup>
const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>