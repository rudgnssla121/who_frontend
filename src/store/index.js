import Vue from 'vue'
import Vuex from 'vuex'
import member from "@/assets/member.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memberlist:[],
    check: false
  },
  mutations: {
    setMember(state, data){
      state.memberlist = data;
    },
    addMember(state, data){
      state.memberlist.push(data);
    },
    checkChange(state){
      state.check = true;
    }
  },
  actions: {
    listInit({commit}){
      const res = member;
      const data = res;
      commit('setMember', data);
    },
    listAdd({commit},data){
      commit('addMember', data);
    }
  },
  modules: {
  }
})
