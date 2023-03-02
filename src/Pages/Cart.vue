<template>
  <v-app id="inspire" :theme="useCartStore().getTheme">
    <div class="py-12 mr-9">
      <v-row>
        <v-col md="8">
          <v-card class="py-5 px-4" style="max-height: 600px; overflow-y: auto">
            <v-card-title class="mb-5"> Mi Carrito </v-card-title>
            <v-card-text v-if="cartStore.formattedCart.length">
              <div
                v-for="item in cartStore.formattedCart"
                :key="item.id"
                class="mb-8"
              >
                <v-row>
                  <v-col sm="3">
                    <div class="d-flex align-center no-wrap">
                      <img
                        style="width: 100px; height: 70px; object-fit: cover"
                        :src="item.image"
                      />
                      <h3 class="text-capitalize ml-3">
                        {{ item.name }}
                      </h3>
                    </div>
                  </v-col>
                  <v-col sm="8">
                    <div
                      class="
                        d-flex
                        justify-space-between
                        align-center
                        no-wrap
                        w-full
                        h-100
                      "
                    >
                      <div class="d-flex align-center bg-primary rounded">
                        <span
                          class="icon d-flex align-center pa-3"
                          style="cursor: pointer"
                          @click="cartStore.add(item.id)"
                        >
                          <v-icon> fa-solid fa-plus </v-icon>
                        </span>
                        <span class="number d-flex align-center pa-3">
                          {{ item.quantity }}
                        </span>
                        <span
                          style="cursor: pointer"
                          class="icon d-flex align-center pa-3"
                          @click="cartStore.remove(item.id)"
                        >
                          <v-icon> fa-solid fa-minus</v-icon>
                        </span>
                      </div>
                      <p>
                        {{ item.quantity }}
                        X {{ item.price }} =
                        <strong>
                          {{ item.cost }}
                        </strong>
                      </p>
                      <v-btn @click="cartStore.removeProduct(item.id)" icon>
                        <v-icon color="red"> fa-solid fa-trash</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-text class="text-center" v-else>
              <v-btn class="mx-auto" @click="$router.push('/Pastel')" color="primary">
                Tu carrito esta vacío. Rellenalo
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="cartStore.total" md="4">
          <v-card class="py-5 px-4">
            <v-card-title class="mb-5"> Resumen del Pedido </v-card-title>
            <v-card-text>
              <div class="d-flex align-center justify-space-between mb-4">
                <p class="ma-0">Subtotal</p>
                <p class="text-primary">${{ cartStore.total }}</p>
              </div>
              <v-divider></v-divider>
              <div class="py-3 d-flex align-center justify-space-between mb-4">
                <p class="ma-0">Total</p>
                <p class="text-primary">${{ cartStore.total }}</p>
              </div>
              <v-btn color="primary" block> Verificar </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <Header />
    </div>
  </v-app>
</template>


<script setup>
import Header from "../components/Header.vue";
import { useCartStore } from "../store/cart";
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: "ine-iten",
  components: {
    Header,
  },
};
</script>
