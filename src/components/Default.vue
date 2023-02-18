<template>
    <v-app>
        <Navbar />
        <main>
            <router-view />
        </main>
    </v-app>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>