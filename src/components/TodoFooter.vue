<template>
  <div class="clear-all-container">
    <span class="clear-all-container__btn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit('clearItems');
    },
  },
};
</script>

<style scoped>
.clear-all-container {
  width: 8.5rem;
  height: 50px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
  line-height: 50px;
}
.clear-all-container__btn {
  display: block;
  color: #e20303;
  cursor: pointer;
}
</style>
