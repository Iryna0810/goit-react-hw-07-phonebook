import axios from "axios"

axios.defaults.baseURL = 'https://646a61c35a6ce7a8a219b0d4.mockapi.io/'

export async function getContacts () {
    const {data} = await axios.get(`/users`)
    console.log(data)
    return data
}

export async function addContact(name, phone) {
    const { data } = await axios.post(`/users`, { name, phone })
    return data;
}

export async function deleteContact (id) {
    const { data } = await axios.post(`/users, ${ id }`)
    return data;
}