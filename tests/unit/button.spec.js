import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import Button from "@/packages/button.vue";
import Icon from "@/packages/icon.vue";

describe("button.vue", () => {
  it("1.测试button是否能正常显示slot里的内容", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "按钮"
      }
    });
    expect(wrapper.text()).to.eq("按钮");
  });
  it("2.测试icon传入是否正常", () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        "uc-icon": Icon
      },
      propsData: {
        icon: "return"
      }
    });
    expect(wrapper.find("use").attributes("href")).to.eq("#icon-return");
  });
  it("3.测试loading时按钮是否是禁用状态", () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        "uc-icon": Icon
      },
      propsData: {
        loading: true
      }
    });
    expect(wrapper.find("use").attributes("href")).to.eq("#icon-loading");
    expect(wrapper.find("button").attributes("disabled")).to.eq("disabled");
  });
  it("4.测试button能否正常点击", () => {
    const wrapper = shallowMount(Button, {
      stubs: ["uc-icon"]
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click").length).to.eq(1);
  });
  it("5.测试button传入icon-position是否能正确显示", () => {
    const wrapper = shallowMount(Button, {
      attachToDocument: true,
      stubs: {
        "uc-icon": Icon
      },
      slots: {
        default: "按钮"
      },
      propsData: {
        iconPosition: "left",
        icon: "return"
      }
    });
    expect(wrapper.classes()).to.contain("uc-button-left");
    const el = wrapper.vm.$el.querySelector("span");
    expect(getComputedStyle(el).order).to.eq("2");
    wrapper.setProps({ iconPosition: "right" });
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(el).order).to.eq("1");
    });
  });
});
