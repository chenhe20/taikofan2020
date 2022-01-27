<template>
<div id="card">
  <el-card class="box-card" :class="[{active:isActive}, dlcPack.genre, packReleaseDate.substring(0,4), dlcPack.price.toString()]">
    <h1>{{dlcPack.packName}}</h1><br>
    <h3 id="releaseDate">{{packReleaseDate}}</h3>
    <h2 style="color: black">{{packPrice}}</h2>
    <el-button @click="clickCard">{{buttonText}}</el-button>
  </el-card>
  <div :class="[isActive?'detailedSongList':'hiddenSongList', isViewing?'isViewing':'notViewing', 'dlcSongList']">
    <transition name = "router-slid">
        <Songlist v-if="isActive" class="transition-box" :song-list="songList" @userViewingMv="onViewing"></Songlist>
    </transition>
    </div>
</div>
</template>

<script>
import Songlist from './Songlist'
export default {
  name: 'dlc-pack',
  components: { Songlist },
  data () {
    return {
      songList: this.dlcPack.songList,
      buttonText: 'view',
      isActive: false,
      isViewing: false
    }
  },
  props: {
    dlcPack: Object
  },
  computed: {
    packPrice: function () {
      return this.dlcPack.price === 0 ? 'FREE' : '$' + this.dlcPack.price.toString()
    },
    packReleaseDate: function () {
      return this.dlcPack.releaseDate.substring(0, 10)
    }
  },
  methods: {
    clickCard () {
      if (this.isActive === false) {
        this.isActive = true
        this.buttonText = 'hide'
      } else {
        this.isActive = false
        this.buttonText = 'view'
      }
    },
    onViewing (isViewing) {
      this.isViewing = isViewing
    },
    openPackOnView () {
      if (this.isActive === false) {
        this.isActive = true
        this.buttonText = 'hide'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #card{
    width: 600px;
  }
  #releaseDate{
    position: relative;
    right:200px;
    top: 110px;
    color: #3b3b35;
  }
  .box-card{
    color: #edfaed;
    -webkit-text-stroke: 0.7px black;
  }
  .dlcSongList{
    margin-bottom: 30px;
    margin-top: 20px;
    transition: height 500ms;
    position: relative;
    bottom: 24px;
  }
  .detailedSongList .isViewing{
    height: 700px;
  }
  .detailedSongList .notViewing{
    height: 260px;
  }
  .hiddenSongList{
    height: 30px;
  }
  .el-card.is-always-shadow{
    border-radius: 16px;
    transition: height 1s;
    button{
      position: relative;
      left:250px;
      border-radius: 20px;
    }
  }
  .el-card.is-always-shadow.active {
    height: 160px;
    margin-bottom: 10px;
    transition: height 1s;
    h1{
      font-size: 18px;
      transition: font-size 1s;
    }
    #releaseDate{
      display: none;
    }
    h2{
      position: relative;
      bottom: 48px;
      transition: background-position 1s;
    }
    button{
      position: relative;
      bottom: 80px;
      transition: background-position 1s;
    }
  }
  .router-slid-enter-active, .router-slid-leave-active{
    transition: all .2500ms;
  }
  .router-slid-enter, .router-slid-leave-active{
    transform: translate3d(0, 3rem, 0);
    opacity: 0;
  }
  .Pops {background-image: linear-gradient(to bottom right, #68dbcb, rgba(15, 177, 191, 0.99));}
  .Anime {background-image: linear-gradient(to bottom right, rgba(239, 186, 105, 0.99), rgba(248, 187, 95, 0.99));}
  .Vocaloid {background-image: linear-gradient(to bottom right, rgba(143, 154, 157, 0.99), rgba(74, 91, 95, 0.99))}
  .Variety {background-image: linear-gradient(to bottom right, rgba(76, 205, 102, 0.98), rgba(22, 159, 51, 0.98));}
  .Classic {background-image: linear-gradient(to bottom right, rgba(212, 182, 37, 0.97), rgba(202, 170, 15, 0.97));}
  .GameMusic {background-image: linear-gradient(to bottom right, rgba(153, 73, 227, 0.99), rgba(127, 16, 229, 0.99));}
  .NamcoOriginal {background-image: linear-gradient(to bottom right, #ef4343, #ea0e0e);}
</style>
