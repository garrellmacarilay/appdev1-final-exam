import axios from "axios"

const URL = import.meta.env.VITE_APP_API_URL

export const getTodosAPI = function () {
    return axios.get(`${URL}/todos?_limit=10`)
    .then(res => res.data)
}
export const addTodoAPI = function (todo) {
    return axios.post(`${URL}/todos`, todo, {
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.data)
}

export const updateTodoAPI = function(todo) {
    return axios.put(`${URL}/todos/${todo.id}`, todo, {
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.data)
}

export const deleteTodoAPI = function(id) {
    return axios.delete(`${URL}/todos/${id}`)
    .then(() => id)
}


