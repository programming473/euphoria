// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "./firebase";
// import { setProducts } from "../redux/productsSlice";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (_, thunkAPI) => { 
//     const productsCollectionRef = collection(db, "products");
//     try {
//       const data = await getDocs(productsCollectionRef);
//       const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//       thunkAPI.dispatch(setProducts(products)); 
//       console.log(products);
//       return products;

//     } catch (error) {
//       // console.error(error);
//       throw error;
//     }
//   }
// );
