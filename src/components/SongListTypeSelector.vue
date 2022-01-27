<template>
  <div>
    <el-radio-group v-model="listType" @change="changeType">
  <el-radio label="base">Base Songs</el-radio>
  <el-radio label="dlc">Dlc Songs</el-radio>
  <el-radio label="all">All Songs</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'songListTypeSelector',
  data () {
    return {
      listType: 'base'
    }
  },
  methods: {
    changeType: function () {
      this.$emit('changeListType', this.listType)
    }
  }
}
</script>
