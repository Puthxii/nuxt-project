import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _12d960c0 = () => interopDefault(import('../pages/bar.vue' /* webpackChunkName: "pages/bar" */))
const _486a60a2 = () => interopDefault(import('../pages/bar2.vue' /* webpackChunkName: "pages/bar2" */))
const _e0dbf682 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bar",
    component: _12d960c0,
    name: "bar"
  }, {
    path: "/bar2",
    component: _486a60a2,
    name: "bar2"
  }, {
    path: "/",
    component: _e0dbf682,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
