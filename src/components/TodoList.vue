<template>
  <div class="todo-list">
    <ul class="todo-list__items">
      <li
        class="shadow todo-list__item"
        v-for="(todoItem, index) in todoItems"
        :key="todoItem.item"
      >
        <span
          class="todo-list__check-btn"
          :class="{ 'check-btn-completed': todoItem.completed }"
          @click="toggleComplete(todoItem, index)"
        >
          <FontAwesomeIcon icon="check" />
        </span>
        <span :class="{ 'text-completed': todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span
          class="todo-list__remove-btn"
          @click="removeTodo(todoItem, index)"
        >
          <FontAwesomeIcon icon="trash-alt" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
};
</script>

<style scoped>
.todo-list .todo-list__items {
  list-style-type: none;
  margin-top: 0;
  padding-left: 0;
  text-align: left;
}
.todo-list .todo-list__item {
  display: flex;
  min-height: 50px;
  height: 50px;
  margin: 0.5rem 0;
  padding: 0 1rem;
  background-color: #fff;
  border-radius: 5px;
  line-height: 50px;
}

.todo-list .todo-list__remove-btn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
.todo-list .todo-list__check-btn {
  margin-right: 10px;
  line-height: 45px;
  color: #62acde;
  cursor: pointer;
}

.check-btn-completed {
  color: #b3adad;
}
.text-completed {
  color: #b3adad;
  text-decoration: line-through;
}
</style>
