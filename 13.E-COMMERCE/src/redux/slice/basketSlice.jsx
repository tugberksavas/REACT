import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStoreage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStoreage(),
  drawer : false,
  totalAmount : 0
};

const writeFromBasketToStoreage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        //daha onceden eklenmistir
        const extraactedProducts = state.products.filter(
          (product) => product.id != action.payload.id
        );

        findProduct.count += action.payload.count;

        state.products = [...extraactedProducts,findProduct]
        writeFromBasketToStoreage(state.products)
      } else {
        //daha onceden eklenmemistir
        state.products = [...state.products, action.payload];
        writeFromBasketToStoreage(state.products);
      }
    },
    setDrawer : (state) => {
      state.drawer = !state.drawer
    },

    calculateBasket : (state,action) => {
      state.totalAmount = 0;
      state.products && state.products.map((product)=>{
        state.totalAmount += product.price * product.count ;
      })
    } 
  },
});

export const { addToBasket,setDrawer,calculateBasket } = basketSlice.actions;

export default basketSlice.reducer;
