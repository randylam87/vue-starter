const state = {
  items: {
    10: {
      item: 10,
      type: 'Jar',
      quantity: 100,
      decorations: [],
    },
    11: {
      item: 11,
      type: 'Lid',
      quantity: 100,
      decorations: [],
    },
  },
  questions: [],
  answers: [],
};

const getters = {
  // eslint-disable-next-line no-shadow
  items: (state: any) => state.items,
};

const mutations = {
  // eslint-disable-next-line no-shadow
  UPDATE_ITEM(state: any, item: any) {
    state.items[item.item] = item;
  },
};

const actions = {
  updateItem(context: any, item: any) {
    context.commit('UPDATE_ITEM', item);
  },
};

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default module;
