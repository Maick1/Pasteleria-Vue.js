<template>
  <v-footer 
    class="lighten-1 text-center d-flex flex-column bg-black "
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Atencion 24/7 estamos para cumplir todas tus fantasia con el Lema siempre "El Cliente Tiene La Razón", ven visitamos en nuesto establecimientos y seiguenos en tus redes I LOVE YOU
    </div>
    <v-img src="logo_Pas.jpg" contain width="30"></v-img>
    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
    <div class="scroll-top-container">
    <v-btn color="white" @click="scrollToTop" icon="fa-solid fa-arrow-up-short-wide"></v-btn>
  </div>
  </v-footer>
</template>

<script>
export default {
  name: "Pie-iten",
  data: () => ({
    icons: ["fab fa-apple", "fab fa-google-plus-g", "fab fa-twitter", "fab fa-facebook-f"],
    showScrollTopBtn: false
  }),
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll() {
      if (window.pageYOffset > 100) {
        this.showScrollTopBtn = true;
      } else {
        this.showScrollTopBtn = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.scroll-top-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>



<style>
.scroll-top-container {
  position: fixed;
  bottom: 5px;
  right: 10px;
}
</style>