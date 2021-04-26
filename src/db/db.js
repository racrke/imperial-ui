import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const getProduct = (id) => (
  axios.get(`/product/${id}`)
    .then(resp => resp.data)
    .catch(err => console.error(err))
)

const getProducts = () => (
  axios.get(`/product`)
    .then(resp => resp.data)
    .catch(err => console.error(err))
)

export {getProduct, getProducts};
