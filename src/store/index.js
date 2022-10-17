import axios from 'axios'
import { createStore } from 'vuex';

export default createStore({
    state: {
        dataUser: []
    },
    mutations: {

    },
    actions: {
        getUsers() {
            return axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
})