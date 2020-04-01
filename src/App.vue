<template>
  <div id="app">
    <uc-button>默认按钮</uc-button>
    <uc-button type="primary">主要按钮</uc-button>
    <uc-button type="success">成功按钮</uc-button>
    <uc-button type="warning">警告按钮</uc-button>
    <uc-button type="danger">危险按钮</uc-button>
    <uc-button type="info">信息按钮</uc-button>

    <br />

    <uc-button type="primary" icon="addition">添加</uc-button>
    <uc-button type="success" icon="addition">添加</uc-button>
    <uc-button type="warning" icon="editor" icon-position="right"
      >编辑</uc-button
    >
    <uc-button type="danger" icon="editor"></uc-button>

    <br />

    <uc-button type="primary" :loading="true">loading</uc-button>

    <br />

    <uc-button type="success" @click="handleClick">事件</uc-button>

    <br />

    <uc-icon icon="accessory"></uc-icon>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleClick(e) {
      console.log("点击按钮", e);
    }
  }
};
</script>

<style lang="scss"></style>
