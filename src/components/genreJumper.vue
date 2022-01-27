<template>
  <div>
  <button class="button PopsBtn" @click="jumpPage('Pops')" :class="isViewing === 'Pops'?'isViewing':'notViewing'">Pops</button>
  <button class="button AnimeBtn" @click="jumpPage('Anime')" :class="isViewing === 'Anime'?'isViewing':'notViewing'">Anime</button>
  <button class="button VocaloidBtn" @click="jumpPage('Vocaloid')" :class="isViewing === 'Vocaloid'?'isViewing':'notViewing'">Vocaloid</button>
  <button class="button VarietyBtn" @click="jumpPage('Variety')" :class="isViewing === 'Variety'?'isViewing':'notViewing'">Variety</button>
  <button class="button ClassicBtn" @click="jumpPage('Classic')" :class="isViewing === 'Classic'?'isViewing':'notViewing'">Classic</button>
  <button class="button GameMusicBtn" @click="jumpPage('GameMusic')" :class="isViewing === 'GameMusic'?'isViewing':'notViewing'">Game music</button>
  <button class="button NamcoOriginalBtn" @click="jumpPage('NamcoOriginal')" :class="isViewing === 'NamcoOriginal'?'isViewing':'notViewing'">Namco Original</button>
  </div>
</template>

<script>
export default {
  name: 'genreJumper',
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
    color: white;
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
  .PopsBtn {background-color: rgba(15, 177, 191, 0.99);}
  .AnimeBtn {background-color: rgba(248, 187, 95, 0.99);}
  .VocaloidBtn {background-color: rgb(102, 106, 107)}
  .VarietyBtn {background-color: rgba(22, 159, 51, 0.98);}
  .ClassicBtn {background-color: rgba(202, 170, 15, 0.97);}
  .GameMusicBtn {background-color: rgba(89, 10, 162, 0.99);}
  .NamcoOriginalBtn {background-color: #ea0e0e;}
</style>
