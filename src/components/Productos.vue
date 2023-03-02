<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.img">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
name:"Prod-iten",
data: () => ({
    bpm: 1,
  items: [
    { img: "i1.jpg", title: "Cabbage", subtitle: "1kg", price: "$13" },
    { img: "i2.jpg", title: "Perry's Ice Cream", subtitle: "1kg", price: "$23" },
    { img: "i3.jpg", title: "Potato", subtitle: "1kg", price: "$17" },
    { img: "i4.jpg", title: "Suspiro", price: "$5" },
    { img: "i5.jpg", title: "Oreo Biscuit", subtitle: "270GM", price: "$20" },
    { img: "i6.jpg", title: "Papaya", subtitle: "1kg", price: "$10" },
    
  ],
}),
 methods: {
   
   
  },
};
</script>

<style>
</style>