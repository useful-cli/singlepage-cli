<template>
    <div class="recruitment">
      <p class="recruitment-title">团队招聘</p>
      <div class="recruitment-intro">
        <div class="recruitment-intro-job">
          <span class="name">
            门店拓展专员
          </span>
          <span class="triangle"></span>
        </div>
        <div class="recruitment-intro-money">
          <span>薪资:</span>
          6K—12K
        </div>
      </div>

      <div class="recruitment-duty">
        <p class="recruitment-duty-title">岗位职责:</p>
        <ul>
          <li>熟悉了解快递行业，负责所在城市的用户拉新及维护。</li>
          <li>按上级要求执行、落实公司统一的市场拓展政策或阶段性的拓展项目，确保有效率的达成目标。</li>
          <li>根据需要，协助公司运营团队拓展快递使用率。</li>
          <li>协助城市经理有效使用市场拓展费用。</li>
          <li>不断开拓推广渠道，及时汇总、反馈推广的情况，并对各类事件进行及时有效的控制与处理。</li>
        </ul>
      </div>

      <div class="recruitment-duty">
        <p class="recruitment-duty-title">招聘要求:</p>
        <ul>
          <li>一年以上的社会经验，熟悉所在城市的地理环境，具有户外工作、销售经验优先。</li>
          <li>愿意与创业公司共同发展，与团队共同成长。</li>
          <li>执行能力强，理解能力良好，熟悉并贯彻执行各项工作。</li>
          <li>积极进取，责任心强，很强的自我约束力，创新能力，独立工作和承受压力的能力;高度的工作热情，吃苦耐劳。具有基本的成本意识，良好的团队合作精神。</li>
          <li>性格外向，具有较强的沟通表达能力，较强的公关能力、应变能力和商务谈判能力。</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: 'recruitment',
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
.recruitment {
  padding: 0 2rem;
  border-top: 1px solid @yellow;
  padding-bottom: 2rem;
  &-title {
    margin: 1rem 0;
    padding: 0.5rem;
    color: @yellow;
    font-size: 2.4rem;
    font-weight: 600;
    font-family: 'SimHei', 'microsoft yahei';
  }
  &-intro {
    border-bottom: 1px solid #ccc;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-content: space-between;
    &-job {
      flex: 2;
      text-align: left;
      .name {
        font-size: 1.5rem;
        padding: 1.2rem 0.8rem;
        color: white;
        background-color: @yellow;
      }
      .triangle {
        background-color: transparent;
        display: inline-block;
        vertical-align: middle;
        margin-top: -4px;
        border: 2.1rem solid transparent;
        border-left: 20px solid @yellow;
      }
    }
    &-money {
      flex: 1;
      font-size: 1.6rem;
      line-height: 3rem;
      color: @yellow;
      white-space: nowrap;
      span {
        color: #333;
      }
    }    
  }
  &-duty {
    padding: 0 1rem;
    &-title {
      font-size: 1.8rem;
      text-align: left;
    }
    ul {
      padding-left: 1rem;
      li {
        padding-bottom: 1rem;
        color: #666;
        font-size: 1.4rem;
        text-align: justify;
        list-style-type: decimal;
      }
    }
  }

}
</style>
