<template>
    <div class="news">
      <p class="news-title">新闻咨询</p>
      <div class="news-box">
        <div class="news-box-img">
          <a href="http://finance.people.com.cn/n1/2017/0321/c1004-29157670.html" title="">
            <img src="../assets/news/new_pic_fir.png" alt="">
          </a>
        </div>
        <div class="news-box-text">
          <p class="news-box-text___title">
            <a href="http://finance.people.com.cn/n1/2017/0321/c1004-29157670.html" title="">网约车兼职送“快递” “跨界经营”还需明确身份</a>
          </p>
          <p class="news-box-text___time">2017-3-21</p>
        </div>
      </div>

      <div class="news-box">
        <div class="news-box-img">
          <a href="http://tech.163.com/17/0321/10/CG1UUQRG00097U7T.html" title="">
            <img src="../assets/news/new_pic_sec.png" alt="">
          </a>
        </div>
        <div class="news-box-text">
          <p class="news-box-text___title">
            <a href="http://tech.163.com/17/0321/10/CG1UUQRG00097U7T.html" title="">刘智勇：离职创业，做出大学园区快递机器人</a>
          </p>
          <p class="news-box-text___time">2017-3-21</p>
        </div>
      </div>

      <div class="news-box">
        <div class="news-box-img">
          <a href="http://www.bbtnews.com.cn/2017/0321/185864.shtml" title="">
            <img src="../assets/news/new_pic_thi.png" alt="">
          </a>
        </div>
        <div class="news-box-text">
          <p class="news-box-text___title">
            <a href="http://www.bbtnews.com.cn/2017/0321/185864.shtml" title="">快递条例列入国务院2017年立法计划</a>
          </p>
          <p class="news-box-text___time">2017-3-21</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'news',
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
.news {
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid @yellow;
  &-title {
    margin: 0;
    margin-top: 1rem;
    padding: 0.5rem;
    color: @yellow;
    font-size: 2.4rem;
    font-weight: 600;
    font-family: 'SimHei', 'microsoft yahei';
  }

  &-box {
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
    &-img {
      flex: 2;
      img {
        width: 100%;
      }
    }
    &-text {
      flex: 3;
      padding-left: 1rem;
      text-align: justify;
      a {
        font-size: 1.4rem;
        color: #666;
        text-decoration: none;
      }
      &__time {
        color: #999;
      }
    }
  }

}
</style>
