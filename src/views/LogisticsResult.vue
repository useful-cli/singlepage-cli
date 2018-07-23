<template>
    <div class="logisticsresult">
      <div class="logisticsresult-title">
        <div class="logisticsresult-title-img">
          <img :src="img" :alt="brand">
        </div>
        <div class="logisticsresult-title-brand">
          <p>{{brand + '快递'}}</p>
          <p>{{'快递单号  ' + orderSn}}</p>
        </div>
      </div>

      <div class="wrapper">
        <div v-for="part in parts" class="logisticsresult-content">
          <div class="logisticsresult-content--part date-intro">
            <p class="minute">{{part.time | getMinute}}</p>
            <p class="date">{{part.time | getDate}}</p>
          </div>
          <div class="line logisticsresult-content--part">
            <div class="line-div">
              
            </div>
          </div>
          <div class="logisticsresult-content--part">            
            <p>{{part.processInfo}}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import ApiStore from 'ApiStore'
import axios from 'axios'
import { getMinute, getDate } from '../filters'

export default {
  name: 'logisticsresult',
  created () {
    const {brand, orderSn} = this.$route.query
    console.log(`brand is ${brand}, orderSn is ${orderSn}`)
    const url = ApiStore.express.post({brand, orderSn})
    axios.post(url)
         .then(rs => {
           console.log('rs', rs)
           let {errorResult, expressBrand, expressBrandLogo, orderSn, parts} = rs.data
           if (errorResult !== '') {
              /* eslint-disable indent */
              Toast({
                message: errorResult,
                duration: 3000
              })
              return
           }
           this.orderSn = orderSn
           this.brand = expressBrand
           const img = '../static/expresslogo/' + expressBrandLogo
           this.img = img
           this.parts = parts
         })
  },
  filters: {
    getMinute,
    getDate
  },
  data () {
    return {
      img: '',
      brand: '',
      orderSn: '',
      parts: []
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@yellow: #ff750f;
@grey: #efeff4;
.logisticsresult {
  &-title {
    display: flex;
    padding: 1.5rem;
    background: @yellow;
    &-img {
      img {
        width: 5rem;
        font-size: 0;
        vertical-align: middle;
        border-radius: 15%;
      }
    }
    &-brand {
      text-align: left;
      padding-left: 1rem;
      p {
        color: white;
        &:first-child {
          font-size:  1.6rem;
          margin: 0;
          padding: .6rem 0;
        }
        &:last-child {
          font-size: 1.4rem;
          margin: 0;
        }
      }
    }
  }
  .wrapper {
    padding-bottom: 1rem;
  }

  &-content {
    display: flex;
    padding: 1rem;
    padding-bottom: 0;
    &:first-child {
      p {
        color: @yellow;
      }
    }
    .date-intro {
      max-width: 8rem;
    }
    &--part {
      text-align: justify;
      padding: 0 1rem;
      // flex: 1;
      p {
        font-size: 1.4rem;
      }
      p.minute {
        text-align: center;
        font-size: 1.4rem;
        max-height: 1.4rem;
        // overflow: hidden;
        white-space: nowrap;
      }
      p.date {
        text-align: center;
        font-size: 1.3rem;
        max-height: 1.3rem;
        // overflow: hidden;
        white-space: nowrap;
      }
    }
    div.line {
      width: 1rem;
      &:before {
        content: ' ';
        display: inline-block;
        width: 12px;
        height: 12px;
        background: @yellow;
        border-radius: 50%;
      }
      &-div {
        height: 5rem;
        width: 2px;
        margin-left: 38%;
        background: @yellow;
      }
    }
  }
}
</style>
