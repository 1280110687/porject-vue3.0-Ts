// // 设置 rem 函数
// function setRem(): void {
//   // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
//   let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//   //得到html的Dom元素
//   let htmlDom = document.getElementsByTagName('html')[0];
//   //设置根元素字体大小
//   htmlDom.style.fontSize = htmlWidth / 20 + 'px';
// }
// // 初始化
// setRem();
// // 改变窗口大小时重新设置 rem
// window.onresize = function() {
//   setRem();
// };

//基准大小
const baseSize = 16;
// 设置rem函数
function setRem() {
  //当前页面宽度相对于758宽的缩放比例,可根据自己需要修改。
  let scale = document.documentElement.clientWidth / 375;
  if (window.orientation == 180 || window.orientation == 0) {
    scale = document.documentElement.clientWidth / 375;
  }
  if (window.orientation == 90 || window.orientation == -90) {
    scale = document.documentElement.clientWidth / 667;
  }
  //设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}
//初始化
setRem();
//改变窗口大小时重新设置rem
window.onresize = function() {
  setRem();
};
