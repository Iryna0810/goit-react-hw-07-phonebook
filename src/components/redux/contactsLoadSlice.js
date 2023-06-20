import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { getContactsThunk, addContactsThunk, deleteContactsThunk } from "components/redux/thunk";


const handlePanding = (state) => {
    state.isLoading = true
    state.error = null
}

const handleGetFulfilled = (state, { payload }) => {
    state.isLoading = false
    state.contacts = payload
    state.error = null
}

const handleRejected = (state, {payload}) => {
    state.isLoading = false
    state.error = payload
}
        
const handleAddFulfilled = (state, {payload}) => {
    state.isLoading = false
    state.contacts.push(payload)
    state.error = null
}

const handleDeleteFulfilled = (state, {payload}) => {
    state.isLoading = false
   const index = state.findIndex(task => task.id === payload);
    state.splice(index, 1);
    state.error = null            
}


const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getContactsThunk.fulfilled, handleGetFulfilled)
        .addCase(addContactsThunk.fulfilled, handleAddFulfilled)
        .addCase(deleteContactsThunk.fulfilled, handleDeleteFulfilled)
        .addMatcher(
                isAnyOf([
                    getContactsThunk.pending,
                    addContactsThunk.pending,
                    deleteContactsThunk.pending                
                ]), handlePanding
        )
        .addMatcher(
                isAnyOf([
                    getContactsThunk.rejected,
                    addContactsThunk.rejected,
                    deleteContactsThunk.rejected
            ], handleRejected)
        )
        
        
        
    //     [getContactsThunk.pending]: (state) => {
    //         state.isLoading = true
    //     },
    //     [getContactsThunk.fulfilled]: (state, {payload}) => {
    //         state.isLoading = true
    //         state.contacts = payload
    //         state.error = null
    //     },
    //    [getContactsThunk.rejected]: (state, {payload}) => {
    //        state.isLoading = true
    //        state.error = payload
    //     },
    }
});

export const loadContactsReduser = contactsSlice.reducer

    // reducers: {
    //     fetching: (state) => {
    //         console.log(state)
    //         state.isLoading = true
    //     },
    //     fetchSuccess: (state, { payload }) => {
    //         console.log(state, {payload})
    //         state.isLoading = false
    //         state.contacts = payload
    //         state.error = null
    //     },
    //     fetchReject: (state, { payload }) => {
    //         console.log('state =>>', state )
    //         state.isLoading = false
    //         state.error = payload
    //     }
    // }


// export const getContactsThunk = () => {
//     return async (dispatch) => {
//         dispatch(contactsSlice.actions.fetching())
//         try {
//             const data = await getContacts()
//             console.log(data)
//             dispatch(contactsSlice.actions.fetchSuccess(data))
//         } catch (error) {
//             dispatch(contactsSlice.actions.fetchReject(error))
//         }        
//         // return {type: "TEST", payload:100}
//     }
// }




