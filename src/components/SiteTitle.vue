<template>
  <div class="container">
    <svg viewBox="-180 100 480 260" width="480" height="260">
      <symbol id="line-text">
        <text x="0%" y="50%" dy=".4em">
          TAIKOFAN
        </text>
      </symbol>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'siteTitle'
}
</script>

<style lang="scss" scoped>
.container{
  font-size: 60px;
  font-weight: bold;
}
  svg{
    position: absolute;
  }
  .text{
    fill: none;
    stroke-width: 5;
    stroke-dasharray: 0, 240;
    stroke-dashoffset: 0;
  }
  .text:nth-child(7n+1){
    stroke: rgba(15, 177, 191, 0.99);
    animation: text1 4s ease-in-out forwards;
  }
.text:nth-child(7n+2){
  stroke: rgba(234, 177, 90, 0.98);
  animation: text2 4s ease-in-out forwards;
}
.text:nth-child(7n+3){
  stroke: rgb(42, 47, 48);
  animation: text3 4s ease-in-out forwards;
}
.text:nth-child(7n+4){
  stroke: rgb(22, 159, 51);
  animation: text4 4s ease-in-out forwards;
}
.text:nth-child(7n+5){
  stroke: rgba(202, 170, 15, 0.95);
  animation: text5 4s ease-in-out forwards;
}
.text:nth-child(7n+6){
  stroke: rgba(89, 10, 162, 0.98);
  animation: text6 4s ease-in-out forwards;
}
.text:nth-child(7n+7){
  stroke: rgba(234, 14, 14, 0.96);
  animation: text7 4s ease-in-out forwards;
}
  @keyframes text1 {
    100%{
      stroke-dashoffset: 1000;
      stroke-dasharray: 60, 180;
    }
  }
@keyframes text2 {
  100%{
    stroke-dashoffset: 1030;
    stroke-dasharray: 60, 180;
  }
}
@keyframes text3 {
  100%{
    stroke-dashoffset: 1060;
    stroke-dasharray: 60, 180;
  }
} @keyframes text4 {
    100%{
      stroke-dashoffset: 1090;
      stroke-dasharray: 60, 180;
    }
  }
@keyframes text5 {
  100%{
    stroke-dashoffset: 1120;
    stroke-dasharray: 60, 180;
  }
}
@keyframes text6 {
  100%{
    stroke-dashoffset: 1150;
    stroke-dasharray: 60, 180;
  }
}
@keyframes text7 {
  100%{
    stroke-dashoffset: 1180;
    stroke-dasharray: 60, 180;
  }
}
</style>
