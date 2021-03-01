import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

// console.log(typeof(httpClient));

export { httpClient } 