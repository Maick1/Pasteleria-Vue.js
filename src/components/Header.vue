<template>
  <v-app-bar color="blue">
    <v-btn @click="$router.push('/')">
      Inicio
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn color="primary" @click="retroceder" class="text-none" ><v-icon>fa fa-duotone fa-backward-fast</v-icon>
    </v-btn>
    
    <v-btn @click="$router.push('login')" class="text-none" stacked>
      <v-badge :content="cartStore.productsTotal" color="error">
        <v-icon> fa-solid fa-cart-shopping</v-icon>
      </v-badge>
    </v-btn>

    <v-btn @click="$router.push('/')" class="text-none" stacked>
        <v-icon> fa fa-solid fa-house-user</v-icon>
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
export default {
  name: "Hea-iten",
  methods: {
    retroceder() {
      this.$router.go(-1);
    }
  }
}
</script>

<script setup>
import { useCartStore } from "../store/cart";
const cartStore = useCartStore();
</script>


<style lang="scss" scoped>

</style>