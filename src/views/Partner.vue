<template>
    <div class="partner">
      <img src="../assets/city/cit_ban.png" style="width: 100%;" alt="">
      <div class="partner-box">
        <p class="partner-box-title">
          合伙人标准
        </p>
        <p class="partner-box-intro"><span></span>独立承担民事责任的企业或个人，并能遵守法律及公司的相关规章制度，认同总公司企业文化及经营理念</p>
        <p class="partner-box-intro"><span></span>有一定的市场推广经验或社区商户资源，有敬业精神，有互联网创新创业精神，具备团队合作精神，具备与公司共创品牌风雨同舟、永续经营的理念</p>
        <p class="partner-box-intro"><span></span>具有一定的资金实力和风险承担力，愿意接受公司各项培训，能够按公司要求严格执行品牌使用，能积极配合总公司统一市场运作，接受总部的管理和指导，并能及时向总部反馈市场信息</p>
      </div>

      <div class="partner-box">
        <p class="partner-box-title">
          合伙人保障机制
        </p>
        <p class="partner-box-intro"><span></span>区域保障: 对于合伙的区域、城市都是唯一性的，具有一定的保护政策</p>
        <p class="partner-box-intro"><span></span>服务保障: 保障协助区域洽谈快递公司，并协助其发展运营走向成熟</p>
        <p class="partner-box-intro"><span></span>利益保障: 保障合伙人的利益，所有区域快递公司合作由合伙人自行签约，门店运营所有权属于合伙人</p>
      </div>

      <div class="partner-box">
        <p class="partner-box-title">
          加盟合伙人的好处
        </p>
        <p class="partner-box-intro"><span></span>品牌支持：免费提供"妙寄"全套VI识别系统</p>
        <p class="partner-box-intro"><span></span>物料支持：提供统一开业物料、宣传物料等</p>
        <p class="partner-box-intro"><span></span>人员支持：总部运营经理、城市Partner共同对接快递公司，开通全国统一论坛，由专业的运营经理对城市Partner进行现场答疑，定期举行营销培训，同时运营总监每年下店巡查，帮助城市Partner解决问题。</p>
        <p class="partner-box-intro"><span></span>广告支持：总部负责全国性广告投放，并提供地方社区广告推广方案协助经销商尽快打开当地社区市场。</p>
        <p class="partner-box-intro"><span></span>技术支持：专业技术团队，全天候对平台进行技术监督及维护，并提供多样化平台衍生产品，满足消费者需求。</p>
        <p class="partner-box-intro"><span></span>培训支持：公司提供全套经营模式、营销策略、技术服务及完善的行业培训，让城市Partner最快速度熟悉并掌握。</p>
      </div>

      <div class="partner-box">
        <p class="partner-box-title">
          注意事项
        </p>
        <p class="partner-box-intro"><span></span>必须参与总部系统培训，并咨询阅读项目介绍书</p>
        <p class="partner-box-intro"><span></span>遇到问题请及时与城市经理联系交流</p>
        <p class="partner-box-intro"><span></span>请如实在申请表中反馈你的个人情况和当地情况，以便总部数据收集</p>
      </div>

      <div class="partner-box">
        <p class="partner-box-title">
          合作流程
        </p>
        <div class="partner-box-flow">
          <div class="partner-box-flow__img">
            <img src="../assets/city/cit_ico_sig.png" alt="">
          </div>
          <div class="partner-box-flow__intro">
            <p class="title"><strong>01</strong>城市合伙人申请</p>
            <p class="detail">填写申请人信息，城市数据信息，当地资源优势</p>
          </div>
        </div>

        <div class="partner-box-flow">
          <div class="partner-box-flow__img">
            <img src="../assets/city/cit_ico_rev.png" alt="">
          </div>
          <div class="partner-box-flow__intro">
            <p class="title"><strong>02</strong>城市合伙人审核</p>
            <p class="detail">针对申请人资质参与审核，符合合伙人要求</p>
          </div>
        </div>

        <div class="partner-box-flow">
          <div class="partner-box-flow__img">
            <img src="../assets/city/cit_ico_app.png" alt="">
          </div>
          <div class="partner-box-flow__intro">
            <p class="title"><strong>03</strong>城市合伙人签约</p>
            <p class="detail">申请人前往总公司，进行签约仪式，并参观各个门店</p>
          </div>
        </div>

        <div class="partner-box-flow">
          <div class="partner-box-flow__img">
            <img src="../assets/city/cit_ico_tra.png" alt="">
          </div>
          <div class="partner-box-flow__intro">
            <p class="title"><strong>04</strong>城市合伙人培训</p>
            <p class="detail">前往总公司进行系统培训，并到达总部旗舰店进行专业的实操培训</p>
          </div>
        </div>
      </div>
      <p class="join-phone"><i class="phone"></i>加盟热线: 400-820-1563</p>
  </div>
</template>
<script>
export default {
  name: 'partner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@yellow: #ff750f;
.partner {
  &-box {
    padding: 0 2rem;
    &-title {
      margin: 1rem 0;
      padding: 0.5rem;
      color: @yellow;
      font-size: 2.3rem;
      font-weight: 600;
      font-family: 'SimHei', 'microsoft yahei';
    }
    &-intro {
      font-size: 1.4rem;
      text-align: justify;
      padding-left: 2rem;
      color: #666;
      span {
        position: absolute;
        width: 6px;
        height: 6px;
        display: inline-block;
        background: #ff750f;
        border-radius: 50%;
        margin-left: -17px;
        margin-top: 8px;
      }
    }
    &-flow {
      padding: 1rem 0;
      display: flex;
      &__img {
        flex: 1;
        img {
          width: 60%;
        }
      }
      &__intro {
        flex: 2;
        text-align: justify;
        p {
          margin: 0;
        }
        .title {
          font-size: 1.6rem;
          padding: .5rem 0;
          strong {
            padding-right: .4rem;
            color: @yellow;
          }
        }
        .detail {
          font-size: 1.4rem;
        }
      }
    }
  }

  .join-phone {
    font-size: 1.4rem;
    color: #666;
    text-align: left;
    padding-left: 2rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
    i.phone {
      margin-right: .6rem;
      height: 15.5px;
      width: 10px;
      display: inline-block;
      vertical-align: bottom;
      background-image: url('../assets/icon/ico_pho.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
