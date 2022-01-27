<template>
    <div class="typeSelectorBoard">
      <p>Video Source</p>
      <button class="youtubeBtn" :class="mvType === 'youtube'?'isChosen':'notChosen'" @click="changeToYoutube"></button>
      <button title="watch videos from bilibili.com(如果您无法播放YouTube,请尝试此选项)" class="bilibilibBtn" :class="mvType === 'alterMv'?'isChosen':'notChosen'" @click="changeToAlter"></button>
    </div>
</template>

<script>
export default {
  name: 'mvTypeSelector',
  computed: {
    mvType: function () {
      return this.$store.state.mvType
    }
  },
  methods: {
    changeToAlter: function () {
      this.$store.commit('changeMvType', 'alterMv')
    },
    changeToYoutube: function () {
      this.$store.commit('changeMvType', 'youtube')
    }
  }
}
</script>

<style lang="scss" scoped>
.typeSelectorBoard{
  background-color: rgba(239, 239, 237, 0.51);
  width:10rem;
  height:6rem;
  border-radius: 20px;
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.19);
  outline: none;
  p{
    font-weight: bold;
  }
}
button{
  border: none;
  width: 3rem;
  height: 2rem;
  background-size: 3rem 2rem;
  background-repeat:no-repeat;
  background-position: center;
  border-radius: 4px;
  margin-right: 1rem;
  margin-left: 1rem;
  outline:none;
  background-color: rgba(239, 239, 237, 0.05);
}
button:hover{
  background-color: rgba(246, 241, 241, 0.98);
}
.isChosen{
  background-color: rgba(243, 246, 246, 0.99);
  border-bottom: solid black;
}
.youtubeBtn{
  background-image: url("../assets/youtubeIcon.png");
}
.bilibilibBtn{
  background-image: url("../assets/bilibiliIcon.png");
}
</style>
