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
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        <span class="modal-header__title">경고!</span>
        <span class="modal-header__close-modal-btn" @click="closeModal">
          <FontAwesomeIcon icon="times" />
        </span>
      </div>
      <p slot="body">아무것도 입력하지 않으셨습니다.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    clearInput() {
      this.newTodoItem = '';
    },
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    closeModal() {
      this.showModal = false;
    },
  },
  components: {
    Modal,
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
