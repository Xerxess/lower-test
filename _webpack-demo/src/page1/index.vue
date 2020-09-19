<!--
- @name 文件描述
- @author yang.chuan <yang.chuan@bjtce.com>
- @date 2020-09-19
-->

<template>
  <div class="container">
    <el-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="选择时间"
    >
    </el-time-select>
  </div>
</template>

<script>
// import jquery from 'jquery'
import file from 'validator'
console.log(file)
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  props: {},
  watch: {},
  methods: {},
  filters: {},
  /**
   * 生命周期 created
   */
  created() { },
  /**
   * 生命周期 mounted
   */
  mounted() { 
      const jquery=import(/* webpackChunkName: "chunk-jquery" */'jquery');
      const dom=import(/* webpackChunkName: "chunk-dom-helpers" */'dom-helpers');
      console.log(jquery)
      console.log(dom)
  },
  /**
   * 生命周期 beforeDestroy
   */
  beforeDestroy() { }
}
</script>

<style lang="scss" scoped>
</style>