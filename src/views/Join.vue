<template>
    <div class="join">
      <p>申请合作</p>
      <input type="text" name="name"  v-model="name" placeholder="请输入姓名">
      <input type="text" name="mobile" v-model="mobile" placeholder="请输入手机号">
      <input type="text" name="storename" v-model="storename" placeholder="请输入门店名称">
      <button type="" @click="postJoin">提交申请</button>
    </div>
</template>
<script>
import ApiStore from 'ApiStore'
import { Toast } from 'mint-ui'
import axios from 'axios'

export default {
  name: 'join',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: null,
      mobile: null,
      storename: null
    }
  },
  methods: {
    postJoin () {
      if (!this.name || !this.mobile || !this.storename) {
        Toast({
          message: '提交信息不能有空!',
          duration: 5000
        })
        return
      }
      const url = ApiStore.join.post({name: this.name, mobile: this.mobile, storename: this.storename})
      axios.post(url).then(rs => {
        console.log('rs', rs)
        Toast({
          message: rs.data.mess,
          duration: 2000
        })
      }).catch(err => {
        console.error(err)
        Toast({
          message: '申请失败',
          duration: 2000
        })
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@yellow: #ff750f;
.join {
  padding: 0 2rem;
  border-top: 1px solid @yellow;
  p {
    margin: 1rem 0;
    padding: 0.5rem;
    color: @yellow;
    font-size: 2.4rem;
    font-weight: 600;
  }
  input {
    min-width: 80%;
    font-size: 1.6rem;
    border-radius: 6px;
    padding: 1rem 1rem;
    margin: 1rem 0;
    border: 1px solid @yellow;
  }
  button {
    margin-top: 1rem;
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
