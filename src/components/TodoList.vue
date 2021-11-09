<template>
  <div class="todo-list">
    <TransitionGroup name="list" tag="ul" class="todo-list__items">
      <li
        class="shadow todo-list__item"
        v-for="(todoItem, index) in this.storedTodoItems"
        :key="index"
      >
        <span
          class="todo-list__check-btn"
          :class="{ 'check-btn--completed': todoItem.completed }"
          @click="toggleComplete({ todoItem, index })"
        >
          <FontAwesomeIcon icon="check" />
        </span>
        <span :class="{ 'text--completed': todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <span
          class="todo-list__remove-btn"
          @click="removeTodo({ todoItem, index })"
        >
          <FontAwesomeIcon icon="trash-alt" />
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['storedTodoItems']),
  },
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
    }),
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

.todo-list .todo-list__check-btn.check-btn--completed {
  color: #b3adad;
}
.text--completed {
  color: #b3adad;
  text-decoration: line-through;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
