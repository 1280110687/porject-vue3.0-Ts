import { IState } from "@/typings";

export default <IState> {
  list: []
}

/**
 * list: []  ==> list: ITodo[]
 * 
 * listItem: {
 *  id: new Date().getTime -> number
 *  content: string
 *  status: FINISHED  DOING  WILLDO  -> 枚举！(重点)
 * }
 * 
 * type 类型  interface 接口（可以继承）
 */