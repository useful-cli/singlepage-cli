<template>
    <div class="enter">
      <img src="../assets/sta_pic_ban.png" alt="入驻标准">
      <article>
        <div class="enter-title">
          区域供货商
        </div>
        <div class="enter-content">
          <p>
            <span></span>
            拥有正规合法的营业执照。主要负责区域内责任城市的社区运营、服务、管理、及拓展业务。
          </p>
          <p>
            <span></span>
            拥有招商资源，熟悉物流企业加盟商引进流程。
          </p>
          <p>
            <span></span>
            参与、策划、组织过大型项目的招商工作，以及有三年以上加盟招商和管理经验者优先。
          </p>
          <p>
            <span></span>
            抱有长远合作态度。与公司内部各部门进行良好的沟通，努力做好部门间协调协作并及时有效解决问题， 积极配合团队工作。
          </p>
          <p>
            <span></span>
            有较强的数据分析、逻辑判断及沟通表达能力，较强的组织协调、统筹能力，具有团队合作意识和一定危机处理能力。
          </p>
        </div>
      </article>

      <article>
        <div class="enter-title">
          连锁加盟
        </div>
        <div class="enter-content">
          <p>
            <span></span>
            基本要求 → 连锁品牌，区域性或全国性连锁加盟。具有正规合法的营业执照。
          </p>
          <p>
            <span></span>
            人员配置 → 专门的技术人员对接及专业人员业务处理与沟通。
          </p>
          <p>
            <span></span>
            门店空间 → 提供1平米以上储物空间，店内外有可张贴妙寄物料的空间。
          </p>
          <p>
            <span></span>
            技能优势 → 支持代收、代寄，依托社区实体店，引导线下社区服务平台，为实体店增收，带动社区人流。
          </p>
        </div>
      </article>

      <article>
        <div class="enter-title">
          个体
        </div>
        <div class="enter-content">
          <p>
            <span></span>
            面向社区，社区店铺可为个人或者租用，具有正规合法的营业执照。
          </p>
          <p>
            <span></span>
            支持互联网电脑或智能手机。
          </p>
          <p>
            <span></span>
            提供1平米以上储物空间，店内外有可张贴妙寄物料的空间。
          </p>
          <p>
            <span></span>
            根据营业时间定义。
          </p>
        </div>
      </article>
    </div>
</template>
<script>

export default {
  name: 'enter',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@yellow: #ff750f;
.enter {
  padding-bottom: 2rem;
  img {
    width: 100%;
    max-height: 8rem;
  }
  article {
    padding: 0 1rem;
  }
  &-title {
    margin: 1rem 0;
    padding: 0.5rem;
    color: @yellow;
    font-size: 2.4rem;
    font-weight: 600;
    font-family: 'SimHei', 'microsoft yahei';
  }
  &-content {
    p {
      text-align: justify;
      padding-left: 3.2rem;
      padding-right: 1.5rem;
      font-size: 1.6rem;
      color: #666;
      span {
        position: absolute;
        width: 6px;
        height: 6px;
        display: inline-block;
        background: #ff750f;
        border-radius: 50%;
        margin-left: -1.2rem;
        margin-top: .7rem;
      }
    }

  }
}
</style>
