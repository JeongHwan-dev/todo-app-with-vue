<template>
  <div class="clear-all-container" v-if="storedTodoItems.length">
    <span class="clear-all-container__btn" @click="clearTodo">Clear All</span>
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
      clearTodo: 'clearAllItems',
    }),
  },
};
</script>

<style scoped>
.clear-all-container {
  width: 8.5rem;
  height: 50px;
  margin: 20px auto 0;
  border-radius: 5px;
  background-color: #fff;
  line-height: 50px;
}
.clear-all-container__btn {
  display: block;
  border-radius: 5px;
  background-color: #f08383;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s;
  cursor: pointer;
}
.clear-all-container__btn:hover {
  background-color: #ea4e4e;
}
</style>
