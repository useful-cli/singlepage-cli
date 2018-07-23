<template>
    <div class="companyintro">
      <p class="companyintro-title">公司介绍</p>
      <img src="../assets/img_mij.png" style="width: 88%;" alt="公司介绍">
      <p class="companyintro-text">
        上海圈嘀网络科技有限公司创建于2016年初，针对快递市场存在的普遍问题，自主研发网络科技产品，致力于服务快递行业，实现传统快递行业的网络科技化打造国内领先互联网 + 快递终端服务平台。无缝对接快递业终端服务群体，运用互联网大数据智能解决快递终端服务群体的“最后一公里”的服务难题。
      </p>
      <p class="companyintro-title">发展介绍</p>
      <img src="../assets/abo_jpg_his.png" style="width: 100%;min-height: 200px;" alt="">
    </div>
</template>
<script>
export default {
  name: 'companyintro',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@yellow: #ff750f;
.companyintro {
  padding: 0 1rem;
  padding-bottom: 2rem;
  border-top: 1px solid @yellow;
  &-title {
    margin: 1rem 0;
    padding: 0.5rem;
    color: @yellow;
    font-size: 2.4rem;
    font-weight: 600;
    font-family: 'SimHei', 'microsoft yahei';
  }
  &-text {
    color: #666;
    text-align: justify;
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin: 0;
    padding: 0 1rem;
  }
}
</style>
