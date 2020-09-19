<!--
- @name 文件描述
- @author yang.chuan <yang.chuan@bjtce.com>
- @date 2020-09-19
-->

<template>
  <div class="container">page3</div>
</template>

<script>

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
      const f=import(/* webpackChunkName: "chunk-test" */'../helper/test');
  },
  /**
   * 生命周期 beforeDestroy
   */
  beforeDestroy() { }
}
</script>

<style lang="scss" scoped>
</style>