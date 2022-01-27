<template>
  <div class="border">
    <el-collapse-item :name="name" :class="song.genre">
      <template class="songTitle" slot="title">
        {{song.jpname}}
        <div class="dlcLabel" v-show="song.dlc === true"></div>
        <div class="baseIntro">
          <span class="base-intro-enname" v-show="song.enname !== song.jpname">{{song.enname}}</span><br>
          <span class="base-intro-artist">{{song.artist}}</span>
        </div>
      </template>
      <div class="song-content">
      <h1 v-show="song.enname !== song.jpname">{{song.enname}}</h1>
      <h2>{{song.artist}}</h2>
      <h3 v-show="song.dlc === true">{{song.packName}}</h3>
      <h3 class="loadHint" v-if="(canPlayAltMv && isLoadingAlter) || (canPlayYoutube && isLoadingYoutube)">loading..</h3>
      <iframe @load="YoutubeLoadingFinished" v-if="canPlayYoutube" width="560" height="315" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe @load="AlterLoadingFinished" v-if="canPlayAltMv" width="560" height="315" :src="url" frameborder="no" scrolling="no" allowfullscreen="allowFullscreen"></iframe>
      </div>
    </el-collapse-item>
  </div>
</template>

<script>
export default {
  name: 'song-detail',
  props: {
    song: Object,
    activeNumber: String
  },
  data () {
    return {
      isPlaying: false,
      isLoadingYoutube: true,
      isLoadingAlter: true
    }
  },
  computed: {
    name: function () {
      return this.song.songId.toString()
    },
    mvType: function () {
      return this.$store.state.mvType
    },
    url: function () {
      var mvURl
      if (this.mvType === 'youtube') {
        if (this.song.embedId.search('//') !== -1) {
          mvURl = this.song.embedId
        } else {
          mvURl = 'https://www.youtube.com/embed/' + this.song.embedId
        }
      } else {
        mvURl = this.song.altEmbedId + '&as_wide=1&high_quality=1&danmaku=0'
      }
      return mvURl
    },
    canPlayYoutube: function () {
      var canPlayY = false
      if (this.mvType === 'youtube') {
        if (this.song.embedId !== null && this.activeNumber === this.song.songId.toString()) {
          canPlayY = true
        }
      }
      return canPlayY
    },
    canPlayAltMv: function () {
      var canPlayA = false
      if (this.mvType === 'alterMv') {
        if (this.song.altEmbedId !== null && this.activeNumber === this.song.songId.toString()) {
          canPlayA = true
        }
      }
      return canPlayA
    }
  },
  methods: {
    YoutubeLoadingFinished: function () {
      this.isLoadingYoutube = false
    },
    AlterLoadingFinished: function () {
      this.isLoadingAlter = false
    }
  }
}
</script>
<style lang="scss">
    .song-content{
      background-image: url("../assets/taiko.png");
    }
    .el-collapse-item__header {
      display:block;
      text-align: center;
      font-size: 28px;
      color: #edfaed;
      -webkit-text-stroke: 0.7px black;
      text-stroke: 0.7px black;
      border-style: solid;
      border-radius: 10px;
      border-color: black;
      overflow-y:hidden;
    }
    .el-collapse-item__header:hover{
      border-width:5px;
      width: 700px;
      position: relative;
      left: -50px;
      height: 100px;
      transition: width 1ms;
      .baseIntro{
        display: block;
        .base-intro-enname{
          color: black;
          position: relative;
          bottom: 26px;
          font-size: 15px;
          right: 22px;
        }
        .base-intro-artist{
          font-size: 20px;
          position: relative;
          bottom: 50px;
          right: 22px;
        }
      }
    }
    .el-collapse-item__header.is-active{
      border-style:none;
      width: 700px;
      position: relative;
      left: 0;
      height: 52px;
      .baseIntro{
        display: none;
      }
    }
    .el-collapse-item.is-active{
      border-style: solid;
      border-width:3px;
      border-color: black;
      border-radius: 12px;
      width: 700px;
      position: relative;
      left: -50px;
    }
    [class*=" el-icon-"]{
      display: table-column;
    }
    .border{
      margin-top: 2px;
    }
    .Pops .el-collapse-item__header{
      background-color: rgba(15, 177, 191, 0.99);
    }
    .Anime .el-collapse-item__header{
      background-color: rgba(234, 177, 90, 0.98);
    }
    .Vocaloid .el-collapse-item__header{
      background-color: rgb(102, 106, 107);
    }
    .Variety .el-collapse-item__header{
      background-color: rgb(22, 159, 51);
    }
    .Classic .el-collapse-item__header{
      background-color: rgba(202, 170, 15, 0.95);
    }
    .GameMusic .el-collapse-item__header{
      background-color: rgba(89, 10, 162, 0.98);
    }
    .NamcoOriginal .el-collapse-item__header{
      background-color: rgba(234, 14, 14, 0.96);
    }
    .dlcLabel{
      width: 40px;
      height: 20px;
      font-size: 14px;
      text-align: center;
      border-radius: 50%;
      float:right;
      color: black;
      margin-right:.3rem;
      i{
        margin-left:1rem;
      }
      background-image: url("../assets/dlcLogo.png");
      background-size: 28px 18px;
      background-repeat:no-repeat;
      background-color: #d0cbd7;
      background-position: center;
      border: solid;
      border-color: #aa8bdb;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    }
    iframe{
      border-radius:25px;
    }
    .baseIntro{
      display: none;
    }
</style>
