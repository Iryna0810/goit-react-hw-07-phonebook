import { combineReducers } from "@reduxjs/toolkit";
import { loadContactsReduser } from '../Products/productSlice'
import {contactsReducer} from '../redux/contactsSlice'
import { filterReducer } from "./filterSlice";

export const reducer = combineReducers({
    // contacts: contactsReducer,
    filter: filterReducer,
    contacts: loadContactsReduser,
})