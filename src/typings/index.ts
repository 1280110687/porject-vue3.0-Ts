interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}

interface IState {
  list: ITodo[];
  footerTabList: IfooterTabList[];
}

interface IfooterTabList {
  name: string;
  path: string;
  icon: string;
}

enum TODO_STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISHED = 'finished',
}

export { ITodo, IState, TODO_STATUS, IfooterTabList };
