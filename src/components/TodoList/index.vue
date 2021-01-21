<template>
  <div class="controller">
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>
<script lang="ts">
import { IUseTodo, useTodo } from '@/hooks';
import { ITodo } from '@/typings';
import { defineComponent, onMounted, PropType } from 'vue';
import TodoItem from './item.vue';
export default defineComponent({
  name: 'TodoList',
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: {
    TodoItem,
  },
  setup() {
    const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();

    return {
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>
<style lang="scss" scoped></style>
