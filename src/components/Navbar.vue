<template>
    <header>
        <router-link :to="{ name: 'home' }">
            <img src="../assets/logo.svg" alt="Logo Maggie the Cook">
        </router-link>
        <div>
            <router-link :to="{ name: 'categories' }">
                Categorias
            </router-link>
            <router-link :to="{ name: 'name' }">
                Nomes
            </router-link>
        </div>
    </header>
</template>