<template>
  <div>
  <el-collapse v-model="activeNumber" accordion>
    <song-detail  v-for="song in this.songList" :key="song.songId" :song="song" :active-number="activeNumber"></song-detail>
  </el-collapse>
  </div>
</template>

<script>
import SongDetail from '../components/SongDetail'
export default {
  name: 'songList',
  components: { SongDetail },
  data () {
    return {
      activeNumber: '0'
    }
  },
  props: {
    songList: Array
  },
  watch: {
    activeNumber: function (newNumber) {
      if (newNumber !== null) {
        this.$emit('userViewingMv', true)
      } else {
        this.$emit('userViewingMv', false)
      }
    }
  }
}
</script>
<style lang="scss">
</style>
