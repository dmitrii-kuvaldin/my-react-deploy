// важно не забыть импортировать createSlice из Redux
import { createSlice } from '@reduxjs/toolkit';
import ProductState from './types/ProductState';
import { addProduct, deleteProduct, loadProducts } from './productAction';

// создали начальное значение для стейта
const initial: ProductState = {
  products: [],
  isLoading: false,
  error: null
}

// создаем слайс с помощью функции createSlice()
export const productSlice = createSlice({
  //указываем уникальное имя строкой
  name: 'products',
  // передаем начальное значение
  initialState: initial,
  // reducers в toolkit - это функции для изменения стейта в store
  // только для синхронных действий
  reducers: {},
  // асинхронные actions мы прописываем отдельно в createAsyncThunk()
  // и обращаясь к ним расписываем все сценарии promise на изменение данных
  extraReducers: (builder) => {
    builder
      // pending - ожидание, promise отправился, но еще не пришел
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true
      })
      // fulfilled - успех, promise вернулся с данными
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      // rejected - отказ, вернулся с ошибкой
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false
        state.products = []
        state.error = action.payload as string
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((el) => el.id !== action.payload.id)
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.unshift(action.payload)
      })
  }
})
