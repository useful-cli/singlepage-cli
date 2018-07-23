<template>
    <div class="question">
      <p class="question-title">常见问题</p>
      <article class="question-part">
        <div class="question-part-title">
          直拨电话和回拨电话的区别是什么？
        </div>
        <p class="question-part-content">
          直拨电话：在有固定无线网络（非手机4G网络）情况下使用（原因是单路通话利用的是无线网络）；被叫方将显示您注册时用的手机号码；价格为0.06元/分钟；（温馨提示主叫和被叫方如果是不同移动电话服务商通话效果更好） 回拨电话：在手机4G网络（无固定无线网络）情况下使用；使用回拨电话将不产流量费用；回拨电话是通过第三方语音转接通讯，即您拨打电话后将会接到第三方打来的电话，您接听后将再拨打被叫方；被叫方将显示您注册时用的手机号码；价格为0.08元/分钟。（温馨提示：回拨转接等待时间在10秒左右，请耐心等待。）
        </p>
      </article>
      <article class="question-part">
        <div class="question-part-title">
          在使用短信云呼功能时应注意什么？
        </div>
        <p class="question-part-content">
          由于在发送短信或云呼的时候，产品后台需要一个接收数据的时间。考虑到大家能够在不被占用和浪费时间情况下，每次尽量以发送不超过30条短信云呼数据为准。在切换操作时，应及时发送之前的操作数据。
        </p>
      </article>
      <article class="question-part">
        <div class="question-part-title">
         妙寄涉及的电子设备是什么？别的行不行？
        </div>
        <p class="question-part-content">
          妙寄涉及的电子设备：扫描器合作品牌为浩创的W200，蓝牙电子秤合作品牌是jiankun型号为JK05/06+E电子秤， 把枪合作品牌为振中的A1。由于我们有自己独立合作的品牌，考虑更加合理正规化运营，因此在产品配备上务必统一。
        </p>
      </article>
      <article class="question-part">
        <div class="question-part-title">
        关于做社区门店这块的话应具备哪些资质？
        </div>
        <p class="question-part-content">
          连锁品牌，区域性或全国性连锁加盟。具有正规合法的营业执照。
        </p>
      </article>
      <article class="question-part">
        <div class="question-part-title">
        如何查询妙寄相关活动详情？
        </div>
        <p class="question-part-content">
          登录妙寄Miji智慧社区 — 社区 — 福利社<br>登录妙寄Miji智慧社区 — 我 — 我的福利 — 点击获取更多福利
        </p>
      </article>
      <article class="question-part">
        <div class="question-part-title">
        在使用妙寄产品期间所涉及到问题应该如何处理？
        </div>
        <p class="question-part-content">
          登录妙寄Miji智慧社区 — 社区 — 服务中心<br>登录妙寄Miji智慧社区 — 社区 — 设置 — 联系我们
        </p>
      </article>

      <article class="question-part">
        <div class="question-part-title">
        如何加盟妙寄社区？
        </div>
        <p class="question-part-content">
          联系加盟人员 — 了解产品 — 填写申请信息及资质 — 通过审核 — 签署协议 — 正式运营
        </p>
      </article>

      <article class="question-part">
        <div class="question-part-title">
        如何成为一名优秀的加盟专员？
        </div>
        <p class="question-part-content">
          一至两年以上的社会经验，熟悉所在城市的地理环境，了解快递行业；且拥有客户资源者优先；
        </p>
        <p class="question-part-content">
          愿意与创业公司共同发展，与团队共同成长；
        </p>
        <p class="question-part-content">
          执行能力强，理解能力良好，熟悉并贯彻执行各项工作；
        </p>
        <p class="question-part-content">
          积极进取，责任心强，很强的自我约束力，创新能力，独立工作和承受压力的能力;高度的工作热情，吃苦耐劳，具有基本的成本意识，良好的团队合作精神；
        </p>
        <p class="question-part-content">
          性格外向，具有较强的沟通表达能力，较强的公关能力、应变能力和商务谈判能力
        </p>
      </article>

      <article class="question-part">
        <div class="question-part-title">
        妙寄涉及的电子设备是什么？别的行不行？
        </div>
        <p class="question-part-content">
          妙寄涉及的电子设备：扫描器合作品牌为浩创的W200，蓝牙电子秤合作品牌是jiankun型号为JK05/06+E电子秤， 把枪合作品牌为振中的A1。由于我们有自己独立合作的品牌，考虑更加合理正规化运营，因此在产品配备上务必统一。
        </p>  
      </article>
    </div>
</template>
<script>

export default {
  name: 'question',
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
.question {
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

  &-part {
    padding: 1rem 1rem;
    text-align: justify;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border-bottom-width: 0;
    }
    &-title {
      padding: 0 .5rem;
      padding-left: .5rem;
      border-left: 2px solid @yellow;
      color: black;
      font-size: 1.6rem;
    }

    &-content {
      padding: 0 .5rem;
      text-align: justify;
      line-height: 2rem;
      font-size: 1.5rem;
      color: #333;

    }
  }
}
</style>
