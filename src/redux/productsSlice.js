import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => { 
    const productsCollectionRef = collection(db, "products");
    try {
      const data = await getDocs(productsCollectionRef);
      const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(products); 
      return products;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
        state.products = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }
})

export const { setProducts  } = productsSlice.actions

export default productsSlice.reducer
