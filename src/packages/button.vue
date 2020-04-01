<template>
  <button class="uc-button" :class="btnClass">
    <uc-icon :icon="icon" v-if="icon" class="icon"></uc-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "uc-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["primary", "success", "warning", "danger", "info"].includes(type)
        ) {
          console.error(
            "type 必须为: " +
              ["primary", "success", "warning", "danger", "info"].join(",")
          );
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(type) {
        if (type && !["left", "right"].includes(type)) {
          console.error("icon-position 必须为: " + ["left", "right"].join("|"));
        }
        return true;
      }
    }
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`uc-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`uc-button-${this.iconPosition}`);
      }
      return classes;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/var.scss";
$height: 42px;
$font-size: 16px;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;

.uc-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background: $background;
  }
  &:focus,
  &:active {
    border-color: $active-color;
    color: $active-color;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $brand-primary,
        success: $brand-success,
        warning: $brand-warning,
        danger: $brand-danger,
        info: $brand-info
      )
  {
    &-#{$type} {
      background: #{$color};
      border-color: #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        warning: $warning-hover,
        danger: $danger-hover,
        info: $info-hover
      )
  {
    &-#{$type}:hover,
    &-#{$type}:focus {
      background: #{$color};
      border-color: #{$color};
      color: #fff;
    }
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
      margin-left: 4px;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
      margin-left: 0;
      margin-right: 4px;
    }
  }
}
</style>
