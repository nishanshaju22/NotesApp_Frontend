import axios from 'axios'

const BASE_URL = "https://notesapp-backend-pwlu.onrender.com/"

export const getNotes = async() => {
    try {
        const response = await axios.get(`${BASE_URL}notes`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getNote = async(id) => {
    try {
        const response = await axios.get(`${BASE_URL}notes/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const updateNote = async(id, data) => {
    try {
        const response = await axios.put(`${BASE_URL}notes/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteNote = async(id) => {
    try {
        const response = await axios.delete(`${BASE_URL}notes/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const postNotes = async(data) => {
 try {
    const response = await axios.post(`${BASE_URL}notes`, data);
    return response.data;
 } catch (error) {
    console.log(error)
 }
}
