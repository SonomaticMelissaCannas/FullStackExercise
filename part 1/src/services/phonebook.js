import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    // I am using post here becuase I am creating a new object and not updating
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newObject) => { 
    // I am using put here because I am updating an existing object
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
export default { getAll, create, remove, update }