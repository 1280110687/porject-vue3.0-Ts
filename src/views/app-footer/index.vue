<template>
  <div class="tab-view">
    <div
      class="tab-view-item"
      v-for="(item, index) in footerTabList"
      :key="item.name"
      @click="transferTab(item.path, index)"
    >
      <div
        v-if="item.path === activePath"
        class="animation-icon"
        :ref="myRef"
        style="width: 30px; height: 30px"
        :class="'div' + index"
      ></div>
      <div v-else class="static-icon">
        <img :src="item.icon.default" alt="" />
      </div>
      <div class="title">{{ item.name }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import lottie from 'lottie-web';
import { defineComponent, nextTick, onMounted, PropType, reactive, ref } from 'vue';
import { effect } from '@vue/reactivity';
import { IfooterTabList } from '@/typings';

const anima1 = require('@/assets/app-footer/animation/data1.json');
const anima2 = require('@/assets/app-footer/animation/data2.json');
const anima3 = require('@/assets/app-footer/animation/data4.json');
const anima4 = require('@/assets/app-footer/animation/data5.json');

export default defineComponent({
  name: 'AppFooter',
  props: {
    footerTabList: Array as PropType<IfooterTabList[]>,
  },
  data() {
    return {
      // container: $refs[`animation${active}`][0],
    };
  },
  setup() {
    let activePath = ref<string>('/');
    let active = ref<number>(0);
    let anim = null;
    let data = reactive({});
    let element: HTMLElement | null = null;
    let elementArray: (HTMLElement | null)[] = [];

    function myRef(el: HTMLElement | null) {
      console.log(el);

      nextTick(() => {
        elementArray.push(el);
        element = elementArray[active.value];
        // (el as HTMLElement).style.color = 'red';
      });
    }

    const animationArr = reactive([anima1, anima2, anima3, anima4]);

    const transferTab = (path: string, index: number): void => {
      activePath.value = path;
      active.value = index;

      // container = [`animation${active.value}`][0];
      effect(() => {
        data = animationArr[active.value];
        console.log(data, 'data');
        aming(element, data, active.value);
      });
    };

    const aming = (element: any, data: any, i: number): void => {
      // debugger;
      anim = lottie.loadAnimation({
        container: element, //渲染的容器
        renderer: 'svg', // 渲染方式:svg、canvas
        loop: false, //循环播放，默认：false
        autoplay: true, //自动播放 ，默认true
        animationData: data, //动画json
      });
    };

    // const { transferTab }: IUseTab = useTab();
    return {
      transferTab,
      activePath,
      active,
      aming,
      animationArr,
      element,
      myRef,
    };
    onMounted(() => {
      // data = animationArr[active];

      // aming(container, data, i: number);
      console.log(element, 'onMounted');
    });
  },
});
</script>

<style scoped lang="scss">
.tab-view {
  position: fixed;
  bottom: 0;
  /* height: 46px; */
  width: 100%;
  background-color: rgba(245, 245, 245, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  .tab-view-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    .static-icon {
      width: 20px;
      height: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .animation-icon {
    /* border-radius: 50%; */
    /* padding: 10px; */
    /* background-color: rgba(245, 245, 245, 0.9); */
    /* clip-path: polygon(50% 5%, 65% 8%, 83% 25%, 100% 50%, 100% 100%, 0 100%, 1% 50%, 10% 33%, 35% 8%); */
  }
}
</style>
