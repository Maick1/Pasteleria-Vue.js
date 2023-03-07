// Se importa la libreria Pinia
import { defineStore } from "pinia";

// Importamos la Data donde están los pasteles :3
import products from "@/data";


// Creamos nuestra Store con la api de Pinia
export const useCartStore = defineStore("cart", {

  // Definimos el estado inicial de la Store
  state: () => ({
    cartContent: {}, // Un objeto donde se almacenará la cantidad de cada producto que se ha agregado al carrito
    theme: "light", // El tema inicial será "light"
  }),

  // Definimos los getters, que son funciones que nos permiten obtener información de la Store
  getters: {

    // Este getter devuelve un arreglo con la información detallada de cada producto que se ha agregado al carrito
    formattedCart: (state) => {
      return Object.keys(state.cartContent).map((productId) => {
        const product = products.find((p) => p.id === productId);
        return {
          id: productId,
          image: product.image,
          name: product.name,
          price: product.price,
          quantity: state.cartContent[productId].quantity,
          cost: product.price * state.cartContent[productId].quantity,
        };
      });
    },

    // Este getter devuelve el total del valor de los productos en el carrito
    total: (state) => {
      return Object.keys(state.cartContent).reduce((acc, id) => {
        const product = products.find((p) => p.id === id);
        return product ? acc + product.price * state.cartContent[id].quantity : acc;
      }, 0);
    },

    // Este getter devuelve el número total de productos en el carrito
    productsTotal: (state) => {
      return Object.keys(state.cartContent).reduce((acc, id) => {
        return acc + state.cartContent[id].quantity;
      }, 0);
    },

    // Este getter devuelve el tema actual de la aplicación
    getTheme: (state) => {
      return state.theme;
    },
  },

  // Definimos las acciones, que son funciones que nos permiten modificar el estado de la Store
  actions: {

    // Esta acción permite agregar un producto al carrito
    add(productId) {
      if (!this.cartContent[productId]) {
        this.cartContent[productId] = {
          productId,
          quantity: 0,
        };
      }
      this.cartContent[productId].quantity += 1;
    },

    // Esta acción permite remover una unidad de un producto del carrito
    remove(productId) {
      this.cartContent[productId].quantity = this.cartContent[productId]?.quantity - 1 || 0;
      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId];
      }
    },

    // Esta acción permite remover completamente un producto del carrito
    removeProduct(productId) {
      delete this.cartContent[productId];
    },

    // Esta acción permite cambiar el tema de la aplicación
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
});
