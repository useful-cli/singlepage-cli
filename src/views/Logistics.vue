<template>
    <div class="logistics">
      <mt-field label="快递品牌" placeholder="请输入快递品牌 (默认圆通)" v-model='brand'></mt-field>
      <mt-field label="快递单号" placeholder="请输入快递单号" v-model='orderSn'></mt-field>

      <button @click="linkToDetail">查询</button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'

export default {
  name: 'logistics',
  data () {
    return {
      brand: null,
      orderSn: null
    }
  },
  methods: {
    linkToDetail () {
      const brand = this.brand || '圆通'
      const orderSn = this.orderSn
      if (!brand || !orderSn) {
        Toast({
          message: '查询信息不能有空!',
          duration: 3000
        })
        return
      }
      this.$router.push({path: '/search/logistics/result', query: {brand, orderSn}})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@yellow: #ff750f;
@grey: #efeff4;
.logistics {
  height: 79vh;
  background-color: @grey;
  button {
    margin-top: 2rem;
    width: 88%;
    padding: 1.3rem 2rem;
    color: white;
    background-color: @yellow;
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 1.6rem;
  }
}
</style>
