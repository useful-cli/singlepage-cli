import Vue from 'vue'
import Router from 'vue-router'

import Container from '@/views/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children: [{
        path: 'index',
        name: 'Index',
        component: require('../views/Index')
      }, {
        path: 'download',
        name: 'Download',
        component: require('../views/Download')
      }, {
        path: 'join',
        name: 'Join',
        component: require('../views/Join')
      }, {
        path: 'question',
        name: 'Question',
        component: require('../views/Question')
      }, {
        path: 'partner',
        name: 'Partner',
        component: require('../views/Partner')
      }, {
        path: 'enter',
        name: 'Enter',
        component: require('../views/Enter')
      }, {
        path: 'search/logistics',
        name: 'Logistics',
        component: require('../views/Logistics')
      }, {
        path: 'search/logistics/result',
        name: 'LogisticsResult',
        component: require('../views/LogisticsResult')
      }, {
        path: 'search/station',
        name: 'Station',
        component: require('../views/Station')
      }, {
        path: 'recruitment',
        name: 'Recruitment',
        component: require('../views/Recruitment')
      }, {
        path: 'companyintro',
        name: 'CompanyIntro',
        component: require('../views/CompanyIntro')
      }, {
        path: 'news',
        name: 'News',
        component: require('../views/News')
      }]
    }
  ]
})
