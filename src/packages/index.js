import Button from "./button";
import ButtonGroup from "./button-group";
import Icon from "./icon";

const install = Vue => {
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(Icon.name, Icon);
};

if (typeof window.Vue !== "undefined") {
  install(window.Vue);
}

export default {
  install
};
