## Button 按钮
### 基础按钮
<demo-block>
::: slot source
<button-base></button-base>
:::

::: slot highlight
```html
<template>
  <div>
    <uc-button>默认按钮</uc-button>
    <uc-button type="primary">主要按钮</uc-button>
    <uc-button type="success">成功按钮</uc-button>
    <uc-button type="warning">警告按钮</uc-button>
    <uc-button type="danger">危险按钮</uc-button>
    <uc-button type="info">信息按钮</uc-button>
  </div>
</template>
```
:::
</demo-block>


### 图标按钮
<demo-block>
::: slot source
<button-icon></button-icon>
:::

::: slot highlight
```html
<template>
  <div>
    <uc-button type="primary" icon="addition">添加</uc-button>
    <uc-button type="success" icon="addition">添加</uc-button>
    <uc-button type="warning" icon="editor" icon-position="right">编辑</uc-button>
    <uc-button type="danger" icon="editor"></uc-button>
  </div>
</template>
```
:::
</demo-block>


### loading按钮

<demo-block>
::: slot source
<button-loading></button-loading>
:::

::: slot highlight
```html
<template>
  <div>
    <uc-button type="primary" :loading="true">loading</uc-button>
  </div>
</template>
```
:::
</demo-block>


### 按钮事件

<demo-block>
::: slot source
<button-event></button-event>
:::

::: slot highlight
```html
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
```
:::
</demo-block>


### 按钮组

<demo-block>
::: slot source
<button-group></button-group>
:::

::: slot highlight
```html
<template>
  <div>
    <uc-button-group>
      <uc-button icon="return" icon-position="left">上一页</uc-button>
      <uc-button icon="enter" icon-position="right">下一页</uc-button>
    </uc-button-group>
  </div>
</template>
```
:::
</demo-block>