<template>
  <v-app-bar color="blue">
    <v-btn @click="$router.push('/')">
      Inicio
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="$router.push('/Cart')" class="text-none" stacked>
      <v-badge :content="cartStore.productsTotal" color="error">
        <v-icon> fa-solid fa-cart-shopping</v-icon>
      </v-badge>
    </v-btn>
    <v-btn
      :prepend-icon="
        theme === 'light' ? 'fa fa-weather-sunny' : 'fa fa-weather-night'
      "
      @click="cartStore.toggleTheme()"
    >
      Tema Oscuro
    </v-btn>
  </v-app-bar>
</template>

<script>

export default
{
name:"Hea-iten",   
}
</script> 

<script setup>
import { useCartStore } from "../store/cart";
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>

</style>