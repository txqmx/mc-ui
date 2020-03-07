<template>
  <div id="app">
    <mc-button type="primary" @click="buttonClick">主要按钮</mc-button>
    <mc-button type="warning">警告按钮</mc-button>
    <mc-button type="danger">危险按钮</mc-button>
    <mc-button type="success">成功按钮</mc-button>
    <mc-button type="info">信息按钮</mc-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
      buttonClick(event){
          console.log(event);
      }
  }
}
</script>

