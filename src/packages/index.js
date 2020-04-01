import Button from "./button";
import Icon from "./icon";

const install = Vue => {
  Vue.component(Button.name, Button);
  Vue.component(Icon.name, Icon);
};

if (typeof window.Vue !== "undefined") {
  install(window.Vue);
}

export default {
  install
};
