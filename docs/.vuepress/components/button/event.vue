<template>
  <div>
    <uc-button type="success" @click="handleClick">事件</uc-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      console.log("点击按钮", e);
    }
  }
};
</script>