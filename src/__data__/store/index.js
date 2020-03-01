import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import * as types from '../constants/mutation-types'
import { API_URLS } from '../constants/api-urls'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        wines: []
    },
    actions: {
        async getWines({commit}, params) {
            console.log('params', params)
            try {
                const res = await axios.get(API_URLS.RANDOM_WINES, {
                    method: 'GET',
                    params: {
                        ... params,
                        limit: 20,
                        ordering: '-score'
                    },
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Token f7d51c21176bfb958a2ba1256425506275480d0f'
                    }
                });

                if(res){
                    const { results } = res.data;
                    console.log('results', results);
                    commit(types.GET_WINE, results);
                }
            } catch (e) {
                console.log(e)
            }

        }
    },
    mutations: {
        [types.GET_WINE](state, results) {
            state.wines = results;
        }
    },
    getters: {
        getWines: (state) => state.wines
    }
})
