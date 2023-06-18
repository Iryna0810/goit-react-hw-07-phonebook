import { combineReducers } from "@reduxjs/toolkit";
import { contactsReduser } from '../Products/productSlice'
import { filterReducer } from "./filterSlice";

export const reducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReducer,
})