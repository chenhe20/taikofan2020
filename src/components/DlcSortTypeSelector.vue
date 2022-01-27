<template>
  <el-radio-group v-model="sortType" @change="changeType">
    <el-radio label="recently">Most Recently</el-radio>
    <el-radio label="genre">by Genre</el-radio>
    <el-radio label="price">by Price</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: 'DlcSortTypeSelector',
  data () {
    return {
      sortType: 'recently'
    }
  },
  methods: {
    changeType: function () {
      this.$emit('changeSortType', this.sortType)
    }
  }
}
</script>

<style scoped>

</style>
