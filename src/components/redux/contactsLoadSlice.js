import { createSlice} from "@reduxjs/toolkit"
import { getContactsThunk, addContactsThunk, deleteContactsThunk } from "components/redux/thunk";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}

const handlePanding = (state) => {
    state.isLoading = true
    state.error = null
}

const handleGetFulfilled = (state, { payload }) => {
    state.isLoading = false
    state.contacts = payload
}

const handleRejected = (state, {payload}) => {
    state.isLoading = false
    console.log(payload)
    state.error = payload
}
        
const handleAddFulfilled = (state, {payload}) => {
    state.isLoading = false
    state.contacts.push(payload)
}

const handleDeleteFulfilled = (state, {payload}) => {
    state.isLoading = false
   const index = state.contacts.findIndex(contact => contact.id === payload.id);
    state.contacts.splice(index, 1);
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getContactsThunk.fulfilled, handleGetFulfilled)
        .addCase(addContactsThunk.fulfilled, handleAddFulfilled)
        .addCase(deleteContactsThunk.fulfilled, handleDeleteFulfilled)
        .addCase(getContactsThunk.pending, handlePanding)
        .addCase(addContactsThunk.pending, handlePanding)
        .addCase(deleteContactsThunk.pending, handlePanding)
        .addCase(getContactsThunk.rejected, handleRejected)
        .addCase(addContactsThunk.rejected, handleRejected)
        .addCase(deleteContactsThunk.rejected, handleRejected)
    }
});

export const loadContactsReduser = contactsSlice.reducer