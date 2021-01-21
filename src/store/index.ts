import { createStore } from 'vuex';

import state from "./modules/state";
import mutations from "./modules/mutations";
import actions from "./modules/actions"

export default createStore({
  state,
  mutations,
  actions
})
