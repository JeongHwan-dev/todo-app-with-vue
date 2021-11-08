<template>
  <div class="input-box shadow">
    <input
      type="text"
      class="input-box__input"
      v-model="newTodoItem"
      @keyup.enter="addTodo"
    />
    <span class="input-box__add-btn" @click="addTodo">
      <FontAwesomeIcon icon="plus" class="input-box__add-btn-icon" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    clearInput() {
      this.newTodoItem = '';
    },
    addTodo() {
      if (this.newTodoItem !== '') {
        const todoItemObject = { completed: false, item: this.newTodoItem };

        localStorage.setItem(this.newTodoItem, JSON.stringify(todoItemObject));
        this.clearInput();
      }
    },
  },
};
</script>

<style scoped>
.input-box {
  height: 50px;
  border-radius: 5px;
  background-color: #fff;
  line-height: 50px;
}
.input-box .input-box__input {
  border-style: none;
  font-size: 0.9rem;
}
.input-box .input-box__input:focus {
  outline: none;
}

.input-box__add-btn {
  display: block;
  width: 3rem;
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.input-box__add-btn-icon {
  vertical-align: middle;
  color: #fff;
}
</style>
