import axios from "axios";

const state = {
  list: [],
};

const actions = {
  home: ({ commit, state },payload) => {
    axios({
      url: "/T1348647853363/0-140.html",
      method: "get",
    }).then((res) => {
      commit("home", res.data["T1348647853363"]);
    });
  },
};

const mutations = {
    home:(state,payload)=>{
        state.list = payload
    }
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
