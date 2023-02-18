<template>
        <v-app-bar extended class="bg-yellow-darken-1 pt-12">
            <v-container class="pa-4">
                <v-row>
                    <v-col>
                        <v-sheet class="bg-yellow-darken-1 h-50">
                            <router-link :to="{ name: 'home' }">
                                <img src="../assets/logo.svg" alt="Logo Maggie the Cook" height="125">
                            </router-link>
                        </v-sheet>
                    </v-col>

                    <v-spacer></v-spacer>

                    <v-col>
                        <v-sheet class="bg-yellow-darken-1">
                            <router-link :to="{ name: 'categories' }">
                                Categorias
                            </router-link>
                            <router-link :to="{ name: 'name' }">
                                Nomes
                            </router-link>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
</template>
