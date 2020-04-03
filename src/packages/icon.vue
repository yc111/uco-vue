<template>
  <!-- <svg class="uc-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg> -->
  <i :class="`iconfont icon-${icon}`"></i>
</template>

<script>
import "../styles/iconfont.css";

export default {
  name: "uc-icon",
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.uc-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
