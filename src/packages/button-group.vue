<template>
  <div class="uc-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "uc-button-group",

  mounted() {
    let children = this.$el.children;
    for (let i = 0; i < children.length; i++) {
      // eslint-disable-next-line no-console
      console.assert(children[i].tagName === "BUTTON", "子元素必须是button");
    }
  }
};
</script>

<style lang="scss">
@import "../styles/var.scss";
.uc-button-group {
  display: inline-flex;
  vertical-align: middle;
  button {
    position: relative;
    border-radius: 0;
    &:not(first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
    }
    &:focus {
      z-index: 2;
    }
  }
}
</style>
