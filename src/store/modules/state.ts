import { IState } from '@/typings';

export default <IState>{
  list: [],
  footerTabList: [
    {
      name: '直播',
      path: '/video',
      icon: require(`@/assets/app-footer/img/staticImg/video.png`),
    },
    {
      name: '首页',
      path: '/',
      icon: require(`@/assets/app-footer/img/staticImg/home.png`),
    },
    {
      name: '订单',
      path: '/order',
      icon: require(`@/assets/app-footer/img/staticImg/order.png`),
    },
    {
      name: '我的',
      path: '/person',
      icon: require(`@/assets/app-footer/img/staticImg/person.png`),
    },
  ],
};

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
