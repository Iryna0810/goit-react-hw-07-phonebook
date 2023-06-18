import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { store } from "components/redux/store"
import { getContacts } from "services/fetchContacts"

export const getContactsThunk = () => {
    return async (dispatch) => {
        dispatch(contactsSlice.actions.fetching())
        try {
            const data = await getContacts()
            dispatch(contactsSlice.actions.fetchSuccess(data))
        } catch (error) {
            dispatch(contactsSlice.actions.fetchReject(error))
        }        
        // return {type: "TEST", payload:100}
    }
}

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        fetching: (state) => {
            state.isLoading = true
        },
        fetchSuccess: (state, { payload }) => {
            state.isLoading = false
            state.contacts = payload
            state.error = null
        },
        fetchReject: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        }
    }
});

export const contactsReduser = contactsSlice.reducer
export const getContactsAction = contactsSlice.actions