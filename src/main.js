import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    // eslint-disable-next-line no-param-reassign
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
