import store from '@/store';
import {
  SET_TODO,
  SET_TODO_LIST,
  REMOVE_TODO,
  SET_TODO_STATUS,
  SET_DOING_STATUS,
} from '@/store/modules/actionTypes';
import { ITodo, TODO_STATUS } from '@/typings';
import { watch } from 'vue';
import { Store, useStore } from 'vuex';

export interface IUseTodo {
  setTodo: (value: string) => void;
  setTodoList: () => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number) => void;
  setDoing: (id: number) => void;
}

interface IUseLocalStorage {
  getLocalList: () => ITodo[];
  setLocalList: (todoList: ITodo[]) => void;
}

function useTodo() {
  const store: Store<any> = useStore();
  const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage();
  const todoList: ITodo[] = getLocalList();

  watch(
    () => {
      return store.state.list;
    },
    todoList => {
      setLocalList(todoList);
    },
  );

  function setTodo(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO,
    };

    store.dispatch(SET_TODO, todo);
    // setLocalList(store.state.list);
  }
  function setTodoList() {
    store.dispatch(SET_TODO_LIST, todoList);
  }
  function removeTodo(id: number): void {
    store.dispatch(REMOVE_TODO, id);
    // setLocalList(store.state.list);
  }
  function setStatus(id: number): void {
    store.dispatch(SET_TODO_STATUS, id);
    // setLocalList(store.state.list);
  }
  function setDoing(id: number): void {
    store.dispatch(SET_DOING_STATUS, id);
    // setLocalList(store.state.list);
  }

  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing,
  };
}

function useLocalStorage(): IUseLocalStorage {
  function getLocalList(): ITodo[] {
    return JSON.parse(localStorage.getItem('todoList') || '[]');
  }
  function setLocalList(todoList: ITodo[]): void {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  return {
    getLocalList,
    setLocalList,
  };
}

export { useTodo };