import { createSlice } from "@reduxjs/toolkit"
// import axios from "axios"
// import { store } from "components/redux/store"
import { getContacts } from "services/fetchContacts"

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
            console.log(state)
            state.isLoading = true
        },
        fetchSuccess: (state, { payload }) => {
            console.log(state, {payload})
            state.isLoading = false
            state.contacts = payload
            state.error = null
        },
        fetchReject: (state, { payload }) => {
            console.log('state =>>', state )
            state.isLoading = false
            state.error = payload
        }
    }
});

export const getContactsThunk = () => {
    return async (dispatch) => {
        dispatch(contactsSlice.actions.fetching())
        try {
            const data = await getContacts()
            console.log(data)
            dispatch(contactsSlice.actions.fetchSuccess(data))
        } catch (error) {
            dispatch(contactsSlice.actions.fetchReject(error))
        }        
        // return {type: "TEST", payload:100}
    }
}

export const loadContactsReduser = contactsSlice.reducer

// export const { getContactsAction } = contactsSlice.actions;