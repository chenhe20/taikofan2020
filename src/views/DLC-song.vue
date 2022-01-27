<template>
  <div id="dlc-content">
    <div class="dlcViewHead">
      <h1>DLC Packs</h1>
    <DlcSortTypeSelector @changeSortType="changeSortType"></DlcSortTypeSelector>
    </div>
    <div id="mvTypeSelectorContainer">
      <mv-type-selector id="mvTypeSelector"></mv-type-selector>
    </div>
    <transition name="moveL">
    <release-date-jumper id="releaseDateJumper" @jumpPageTo="pageJump" :is-viewing="isViewing" v-if="sortType === 'recently'"></release-date-jumper>
    <genre-jumper id="genreJumper" @jumpPageTo="pageJump" :is-viewing="isViewing" v-if="sortType === 'genre'"></genre-jumper>
    <price-jumper id="priceJumper" @jumpPageTo="pageJump" :is-viewing="isViewing" v-if="sortType === 'price'"></price-jumper>
    </transition>
    <div id="content">
      <DlcPack v-for="dlcpack in dlcPackList" :key="dlcpack.packId" :dlc-pack="dlcpack" :ref="dlcpack.packId">
      </DlcPack>
    </div>
  </div>
</template>

<script>
import MvTypeSelector from '../components/MvTypeSelector'
import DlcSortTypeSelector from '../components/DlcSortTypeSelector'
import DlcPack from '../components/Dlc-pack'
import genreJumper from '../components/genreJumper'
import releaseDateJumper from '../components/releaseDateJumper'
import priceJumper from '../components/priceJumper'

export default {
  name: 'dlcsong',
  components: { DlcPack, DlcSortTypeSelector, genreJumper, releaseDateJumper, priceJumper, MvTypeSelector },
  data () {
    return {
      sortType: 'recently',
      jumpDes: '',
      isViewing: '',
      navIndex: -1
    }
  },
  computed: {
    dlcPackList: function () {
      // switch among 3 types: base, dlc and all
      var packList
      if (this.sortType === 'recently') {
        packList = this.$store.state.dlcPackListByDate
      } else if (this.sortType === 'genre') {
        packList = this.$store.state.dlcPackListByGenre
      } else {
        packList = this.$store.state.dlcPackListByPrice
      }
      return packList
    }
  },
  methods: {
    changeSortType: function (type) {
      this.sortType = type
      // switch among 3 types and do axios if the list in storage is empty
      if (this.sortType === 'price') {
        if (this.$store.state.dlcPackListByPrice.length === 0) {
          this.$store.dispatch('getDlcPackListByPrice')
        }
      } else if (this.sortType === 'genre') {
        if (this.$store.state.dlcPackListByGenre.length === 0) {
          this.$store.dispatch('getDlcPackListByGenre')
        }
      } else {
        console.log('now selected recently')
      }
      this.navIndex = -1
    },
    pageJump (des) {
      if (des !== this.jumpDes) {
        this.jumpDes = des
        var el = document.getElementsByClassName(this.jumpDes)[0]
        this.$nextTick(() => {
          window.scrollTo({ behavior: 'smooth', top: el.offsetTop })
        })
      }
    },
    onScroll () {
      // scroll listener
      const navContents = document.querySelectorAll('.el-card')
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let scrollNavIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        if (scrollTop >= offsetTopArr[n]) {
          scrollNavIndex = n
        }
      }
      // scroll listener on
      if (this.navIndex !== scrollNavIndex) {
        console.log('scroll index is ', scrollNavIndex)
        // open the first pack
        if (this.navIndex === -1) {
          this.$refs[this.dlcPackList[this.navIndex + 1].packId][0].openPackOnView()
          this.navIndex = scrollNavIndex
          setTimeout(() => {
            this.$refs[this.dlcPackList[this.navIndex + 1].packId][0].openPackOnView()
            this.navIndex = 1
          }, 800)
        } else {
          setTimeout(() => {
            this.$refs[this.dlcPackList[this.navIndex + 1].packId][0].openPackOnView()
            this.navIndex = scrollNavIndex
          }, 800)
        }
      }
      if (this.sortType === 'genre') {
        this.isViewing = navContents[scrollNavIndex].classList[3] === 'active' ? navContents[scrollNavIndex].classList[4] : navContents[scrollNavIndex].classList[3]
      }
      if (this.sortType === 'recently') {
        this.isViewing = navContents[scrollNavIndex].classList[4] === 'active' ? navContents[scrollNavIndex].classList[5] : navContents[scrollNavIndex].classList[4]
      }
      if (this.sortType === 'price') {
        this.isViewing = navContents[scrollNavIndex].classList[5] === 'active' ? navContents[scrollNavIndex].classList[6] : navContents[scrollNavIndex].classList[5]
      }
    }
  },
  mounted () {
    if (this.$store.state.dlcPackListByDate.length === 0) {
      this.$store.dispatch('getDlcPackListByDate')
    }
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss" scoped>
  #content {
    width: 600px;
    border: 0;
    padding: 5px;
    margin: auto;
  }
  .dlcViewHead{
    margin-bottom: 20px;
  }
  #genreJumper{
    position: fixed;
    left:10px;
    top:200px;
  }
  #releaseDateJumper{
    position: fixed;
    left:10px;
    top:350px;
  }
  #priceJumper{
    position: fixed;
    left:10px;
    top:300px;
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
  .moveL-enter-active, .moveL-leave-active {
    transition: all 0.3s linear;
    transform: translateX(0%);
  }
  .moveL-enter, .moveL-leave {
    transform: translateX(-100%);
  }
  .moveL-leave-to {
    transform: translateX(-100%);
  }
</style>
