import Button from "./button";
import ButtonGroup from "./button-group";
import Icon from "./icon";

const install = Vue => {
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(Icon.name, Icon);
};

const plugin = { install };

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
}
if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default {
  install
};
