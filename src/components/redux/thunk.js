import { getContacts, addContact, deleteContact } from "services/fetchContacts"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getContactsThunk = createAsyncThunk('contacts/getAllContacts',
    (_, {rejectWithValue}) => {
        try {
             return getContacts()
        } catch (error) {
            return rejectWithValue(error.message);
        }
       
    })

export const addContactsThunk = createAsyncThunk('contacts/getAddContact',
    ({ name, phone }, {rejectWithValue}) => {
        try {
            return addContact({name, phone})
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)   
    export const deleteContactsThunk = createAsyncThunk('contacts/getDeleteContact',
     (id, {rejectWithValue}) => {
    try {
        return deleteContact(id)
    } catch (error) {
        return rejectWithValue(error.message);
    }  
}
    )   