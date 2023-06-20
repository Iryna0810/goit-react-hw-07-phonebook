import { combineReducers } from "@reduxjs/toolkit";
import { loadContactsReduser } from './contactsLoadSlice'
import { filterReducer } from "./filterSlice";

export const reducer = combineReducers({
    filter: filterReducer,
    contacts: loadContactsReduser,
})