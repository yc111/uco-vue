import Vue from "vue";
import App from "./App.vue";
import ucoUi from "./packages/index";

Vue.config.productionTip = false;

Vue.use(ucoUi);

new Vue({
  render: h => h(App)
}).$mount("#app");
