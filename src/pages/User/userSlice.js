
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      userPass: {
        token: '',
        user: {},
      }
    },
    reducers: {
      login: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      logout: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      register: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      find: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      clear: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
      
    }
    
});

//Acciones que modificarán RDX
export const { login, logout, register, find, clear } = userSlice.actions;

//Estado del que leeremos RDX
export const userData = (state) => state.user;

export default userSlice.reducer;