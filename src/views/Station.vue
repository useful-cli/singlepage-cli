<template>
    <div class="station">
    </div>
</template>
<script>
import { Toast } from 'mint-ui'

export default {
  name: 'station',
  created () {
    Toast({
      message: '暂未开通',
      duration: 500
    })
    this.$router.push({'path': '/index'})
  },
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@yellow: #ff750f;
@grey: #efeff4;
.station {
}
</style>
