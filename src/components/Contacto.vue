<template>
  <v-app-bar color="#C8E6C9">
    <v-btn @click="$router.push('/')">
      Inicio
    </v-btn>
    </v-app-bar>
  <div class="contact-form">
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="name" label="Nombre" required></v-text-field>
      <v-text-field v-model="email" label="Correo electrónico" required></v-text-field>
      <v-textarea v-model="message" label="Mensaje" required></v-textarea>
      <v-btn type="submit" color="primary">Enviar</v-btn>
    </v-form>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Mensaje enviado</v-card-title>
        <v-card-text>Su mensaje ha sido enviado con éxito.</v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

  <script>

  export default {
    name: "FormularioContacto",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            dialog: false
            
        };
    },
    methods: {
        submitForm() {
            // Aquí enviarías el formulario a través de una API o servicio de correo electrónico
            // y mostrarías un mensaje de confirmación en función de la respuesta recibida.
            // Para este ejemplo, simplemente mostraremos un mensaje de confirmación en la pantalla.
            this.dialog = true;
            this.name = "";
            this.email = "";
            this.message = "";
        }
    },
};
  </script>

<style>
.contact-form {
  max-width: 100%;
  margin: 8%;
}

.contact-form v-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.contact-form v-text-field,
.contact-form v-textarea {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: none;
  margin-bottom: 20px;
}

.contact-form v-btn {
  margin-top: 20px;
  color: #fff;
}

.contact-form v-dialog v-card {
  max-width: 400px;
}

.contact-form v-dialog v-card-title {
  background-color: #2196f3;
  color: #fff;
  border-radius: 5px 5px 0 0;
}

.contact-form v-dialog v-card-actions {
  background-color: #f5f5f5;
  border-radius: 0 0 5px 5px;
}

.contact-form v-dialog v-btn {
  color: #fff;
}
</style>
  