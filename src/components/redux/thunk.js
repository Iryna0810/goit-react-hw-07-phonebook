import { getContacts, addContact, deleteContact } from "services/fetchContacts"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getContactsThunk = createAsyncThunk('contacts/getAllContacts',
    (_,thunkAPI) => {
        try {
            return getContacts()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
   
    })

export const addContactsThunk = createAsyncThunk('contacts/getAllContacts',
     ({ name, phone }, thunkAPI) => {
        try {
            return addContact({ name, phone })
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)   
    export const deleteContactsThunk = createAsyncThunk('contacts/getAllContacts',
     (id, thunkAPI) => {
    try {
        return deleteContact(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }  
}
    )   