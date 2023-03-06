<template>
  <v-form @submit.prevent="onSave" class="login-form">
    <v-text-field v-model="entryTask.nombre" label="Nombres" type="text" class="login-input" required></v-text-field>

    <v-text-field v-model="entryTask.email" label="Email" type="email" class="login-input" required></v-text-field>

    <v-text-field v-model="entryTask.password" label="Password" type="password" class="login-input" required></v-text-field>

    <v-btn :disabled="!entryTask.email || !entryTask.password" class="login-button" type="submit">Guardar</v-btn>

    <v-btn :disabled="!entryTask.email || !entryTask.password" @click="$router.push('/Cart')" class="login-button">Acceder</v-btn>
    
    <Navbar />
  </v-form>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  name: "login-item",
  data() {
    return {
      entryTask: {
        nombre: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    onSave() {
      // Aquí se debe enviar los datos al servidor y mostrar la alerta de éxito
      // Al finalizar, se reinician los valores de los campos
      // Para mostrar una alerta, puedes usar una librería de UI como Vuetify o SweetAlert
      alert('Datos guardados');
    }
  }
}
</script>



<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-input {
  margin-bottom: 16px;
  width: 100%;
}

.login-button {
  width: 100%;
  margin-top: 16px;
  background-color: #006699;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0;
}

.login-button:hover {
  background-color: #00557a;
}
</style>

  
 