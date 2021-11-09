import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const todoItems = [];

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          const todoItemObject = JSON.parse(
            localStorage.getItem(localStorage.key(i))
          );

          todoItems.push(todoItemObject);
        }
      }
    }

    return todoItems;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addOneItem(state, todoItem) {
      const todoItemObject = { completed: false, item: todoItem };

      localStorage.setItem(todoItem, JSON.stringify(todoItemObject));
      state.todoItems.push(todoItemObject);
    },
    removeOneItem(state, payload) {
      const { todoItem, index } = payload;

      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, payload) {
      const { todoItem, index } = payload;

      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
