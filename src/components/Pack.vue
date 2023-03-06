<template>
    <v-row justify="center" class="space px-16 pb-5">
      <v-col cols="12" xs="12" sm="6" md="4" v-for="(pack, i) in packs" :key="i">
        <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined>
          <div align="center" justify="center">
            <v-img
              max-height="300"
              max-width="300"
              contain
              :src="pack.img"
            ></v-img>
          </div>
  
          <v-card-title class="">{{ pack.title }}</v-card-title>
          <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
            pack.subtitle
          }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name:"Pack-iten",
    data: () => ({
        bpm: 1,
      packs: [
        { img: "pu1.jpg", title: "Combo Mania", subtitle: "Rellenas de Manjar", price: "$55" },
        { img: "pu2.jpg", title: "2x1", subtitle: "Kisses, Red Velvet", price: "$55" },
        { img: "pu3.jpg", title: "Consuelo", subtitle: "Red Velvet, Cake", price: "$55" },
        { img: "pu4.jpg", title: "Promocion del Dia", subtitle: "Multiples Tortas", price: "$55" },
        { img: "pu5.jpg", title: "Festival del Queso", subtitle: "Piña Colada, Mermelada Berries", price: "$55" },
        { img: "pu6.jpg", title: "San Martin", subtitle: "Rellenas de Amor xD", price: "$55" },
      ],
    }),
     methods: {
        decrement () {
          this.bpm--
        },
        increment () {
          this.bpm++
        },
       
      },
  };
  </script>
  
  <style>
  </style>