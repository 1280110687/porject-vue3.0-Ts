<template>
  <div class="wrapper">
    Vue3.0 + TypeScript
    <todo-input />
    <todo-list :todoList="todoList" />
    <div class="box">PostCss</div>
    <app-footer :footerTabList="footerTabList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { Store, useStore } from 'vuex';
import TodoInput from './components/TodoInput/index.vue';
import TodoList from './components/TodoList/index.vue';
import AppFooter from './views/app-footer/index.vue';
import { IUseTodo, useTodo } from './hooks';

export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList,
    AppFooter,
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();

    onMounted(() => {
      setTodoList();
    });

    return {
      todoList: computed(() => store.state.list),
      footerTabList: computed(() => store.state.footerTabList),
    };
  },
});
</script>
<style>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
<style lang="scss" scope>
.wrapper {
  .box {
    width: 200px;
    height: 50px;
    background-color: #fba;
    font-size: 16px;
    margin-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
