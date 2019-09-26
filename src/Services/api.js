import axios from 'axios'

const api = axios.create({
    baseURL: 'http://apigeneralstudy.herokuapp.com/api'
})

export default api