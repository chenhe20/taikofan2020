<template>
  <div>
    <button class="button freeBtn" @click="jumpPage('0')" :class="isViewing === '0'?'isViewing':'notViewing'">FREE</button>
    <button class="button highBtn" @click="jumpPage('4.99')" :class="isViewing === '4.99'?'isViewing':'notViewing'">$4.99</button>
    <button class="button midBtn" @click="jumpPage('3.99')" :class="isViewing === '3.99'?'isViewing':'notViewing'">$3.99</button>
    <button class="button lowBtn" @click="jumpPage('1.49')" :class="isViewing === '1.49'?'isViewing':'notViewing'">$1.49</button>
  </div>
</template>

<script>
export default {
  name: 'priceJumper',
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
