<template>
    <div class="mj">
        <mj-nav></mj-nav>
        <div class="mj-container">
          <router-view></router-view>  
        </div>
        <mj-footer></mj-footer>
    </div>
</template>
<script>
export default {
  name: 'container',
  created () {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sheetVisible: false,
      actions: [{
        name: '首页',
        method () {
          this.$router.push({'path': 'income/detail?type=' + name})
        }
      }, {
        name: 'App下载',
        method () {
          this.$router.push({'path': 'download'})
        }
      }]
    }
  },
  methods: {
    actionsheetCotrl () {
      this.sheetVisible ? this.sheetVisible = false : this.sheetVisible = true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.mj-container {
    min-height: 73vh;
}
</style>
