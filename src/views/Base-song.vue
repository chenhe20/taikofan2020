<template>
  <div id="song-content" :type="isViewing">
    <div>
    <genre-jumper id="genreJumper" @jumpPageTo="jump" :is-viewing="isViewing"></genre-jumper>
    </div>
    <div id="mvTypeSelectorContainer">
    <MvTypeSelector id="mvTypeSelector"></MvTypeSelector>
    </div>
    <div class="songViewHead">
    <h1>{{listType}} Songs</h1>
    <SongListTypeSelector @changeListType="changeListType"></SongListTypeSelector>
    </div>
    <div id="song-list">
    <song-list :song-list="songList" ></song-list>
    </div>
  </div>
</template>

<script>
import MvTypeSelector from '../components/MvTypeSelector'
import genreJumper from '../components/genreJumper'
import SongListTypeSelector from '../components/SongListTypeSelector'
import SongList from '../components/Songlist'
export default {
  name: 'basesong',
  components: { SongList, SongListTypeSelector, genreJumper, MvTypeSelector },
  mounted () {
    if (this.$store.state.baseSongList.length === 0) {
      this.$store.dispatch('getBaseSongList')
    }
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    songList: function () {
      // switch among 3 types: base, dlc and all
      var songList
      if (this.listType === 'base') {
        songList = this.$store.state.baseSongList
      } else if (this.listType === 'dlc') {
        songList = this.$store.state.dlcSongList
      } else {
        songList = this.$store.state.allSongList
      }
      return songList
    }
  },
  data () {
    return {
      listType: 'base',
      jumpDes: '',
      isViewing: ''
    }
  },
  methods: {
    changeListType (type) {
      this.listType = type
      // switch among 3 types and do axios if the list in storage is empty
      if (this.listType === 'dlc') {
        if (this.$store.state.dlcSongList.length === 0) {
          this.$store.dispatch('getDlcSongList')
        }
      } else if (this.listType === 'all') {
        if (this.$store.state.allSongList.length === 0) {
          this.$store.dispatch('getAllSongList')
        }
      } else {
        console.log('now selected base')
      }
    },
    jump (des) {
      if (des !== this.jumpDes) {
        this.jumpDes = des
        var el = document.getElementsByClassName(this.jumpDes)[0]
        this.$nextTick(function () {
          window.scrollTo({ behavior: 'smooth', top: el.offsetTop })
        })
      }
    },
    onScroll () {
      // scroll listener
      const navContents = document.querySelectorAll('.el-collapse-item')
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      this.isViewing = navContents[navIndex].classList[1]
    }
  }
}
</script>
<style lang="scss" scoped>
  #song-content{
    margin-top: 0;
   border: solid black;
    border-radius: 16px;
    background-color: rgba(71, 207, 219, 0.99);
    transition: background-color 400ms ease;
  }
  #song-content[type='Pops']{
    background-color: rgba(71, 207, 219, 0.99);
  }
  #song-content[type='Anime']{
    background-color: rgba(224, 189, 137, 0.98);
  }
  #song-content[type='Vocaloid']{
    background-color: rgb(150, 155, 157);
  }
  #song-content[type='Variety']{
    background-color: rgb(88, 184, 109);
  }
  #song-content[type='Classic']{
    background-color: rgba(219, 201, 115, 0.95);
  }
  #song-content[type='GameMusic']{
    background-color: rgba(155, 105, 202, 0.98);
  }
  #song-content[type='NamcoOriginal']{
    background-color: rgba(226, 75, 75, 0.96);
  }
  #song-list {
    width: 600px;
    border: 0;
    padding: 5px;
    margin: auto;
    margin-bottom: 100px;
  }
  .songViewHead{
    margin-top: 100px;
    margin-bottom: 20px;
  }
  h1{
    text-transform: capitalize;
  }
  .el-select{
    position: relative;
    right: 450px;
    bottom: 60px;
  }
  #genreJumper{
    position: fixed;
    left:10px;
    top:200px;
  }
  #mvTypeSelectorContainer{
    float: right;
    width: 10rem;
    margin-right: 20px;
  }
  #mvTypeSelector{
    position: fixed;
    top: 65%;
  }
</style>
