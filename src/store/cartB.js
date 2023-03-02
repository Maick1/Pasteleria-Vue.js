//Se importa la libreria Pinia
import { defineStore } from "pinia";
//Importamos la Data donde estan los pasteles :3
import products from "@/dataB";

//Creamos nuesta Store con la api de pinia
export const useCartStore = defineStore("cart", {
  state: () => ({
    //Variables donde se almacena lo añadido del carrito
    cartContent: {},
    theme: "light",
  }),
  getters: {
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
    total: (state) => {
      return Object.keys(state.cartContent).reduce((acc, id) => {
        const product = products.find((p) => p.id === id);
        return product ? acc + product.price * state.cartContent[id].quantity : acc;
      }, 0);
    },
    productsTotal: (state) => {
      return Object.keys(state.cartContent).reduce((acc, id) => {
        return acc + state.cartContent[id].quantity;
      }, 0);
    },
    getTheme: (state) => {
      return state.theme;
    },
  },
  //Acciones
  actions: {
    //Accion de agregar pasteles al carro
    add(productId) {
      if (!this.cartContent[productId]) {
        this.cartContent[productId] = {
          productId,
          quantity: 0,
        };
      }
      this.cartContent[productId].quantity += 1;
    },
    remove(productId) {
      this.cartContent[productId].quantity = this.cartContent[productId]?.quantity - 1 || 0;
      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId];
      }
    },
    removeProduct(productId) {
      delete this.cartContent[productId];
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
});
