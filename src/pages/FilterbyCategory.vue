<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'

const route = useRoute();
const category = computed(() => store.state.category)
const meals = computed(() => store.state.filterByCategory)

onMounted(() => {
  store.dispatch('searchFilterByCategory', route.params.category)
})
</script>