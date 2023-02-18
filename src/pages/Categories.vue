<template>
  <div>
    <input type="text" v-model="keyword"
      placeholder="Procurar por Categorias..." />

    <div>
      <a href="#" @click.prevent="openCategory(category)" v-for="category of computedCategories"
        :key="category.srtCategory">
        <h3>{{ category.strCategory }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const categories = ref([]);
const computedCategories = computed(() => {
  if (!computedCategories) return categories;
  return categories.value.filter((c) =>
    c.strCategory.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openCategory(category) {
  store.commit('setCategory', category)
  router.push({
    name: "category",
    params: { category: category.strCategory },
  });
}
onMounted(() => {
  axiosClient.get("list.php?c=list").then(({ data }) => {
    categories.value = data.meals;
  });
});
</script>