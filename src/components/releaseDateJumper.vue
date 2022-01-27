<template>
  <div>
    <button class="button to20Btn" @click="jumpPage('2020')" :class="isViewing === '2020'?'isViewing':'notViewing'">2020</button>
    <button class="button to19Btn" @click="jumpPage('2019')" :class="isViewing === '2019'?'isViewing':'notViewing'">2019</button>
    <button class="button to18Btn" @click="jumpPage('2018')" :class="isViewing === '2018'?'isViewing':'notViewing'">2018</button>
  </div>
</template>

<script>
export default {
  name: 'releaseDateJumper',
  props: {
    isViewing: String
  },
  methods: {
    jumpPage: function (jumpDes) {
      this.$emit('jumpPageTo', jumpDes)
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    border: none;
    color: #625d5d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    margin: 10px 2px;
    cursor: pointer;
    display: list-item;
    border-radius: 18px;
    width: 200px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    outline: none;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.19);
  }
  .button:hover {
    background-color: #e3e5e3;
    color: white;
    width:300px;
  }
  .isViewing{
    width:250px;
    background-color: #e3e5e3;
  }
</style>
