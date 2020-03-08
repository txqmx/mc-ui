<template>
  <div id="app">
    <!--<mc-button type="primary" @click="buttonClick">主要按钮</mc-button>-->
    <!--<mc-button type="warning">警告按钮</mc-button>-->
    <!--<mc-button type="danger">危险按钮</mc-button>-->
    <!--<mc-button type="success">成功按钮</mc-button>-->
    <!--<mc-button type="info">信息按钮</mc-button>-->

    <!--<mc-input v-model="value" type="text" placeholder="请输入内容"></mc-input>-->
    <!--<mc-input v-model="value" type="password" placeholder="请输入内容"></mc-input>-->
    <!--<mc-input v-model="value" type="password" :disabled="true" placeholder="请输入内容"></mc-input>-->
    <!--<mc-input v-model="value" type="password" placeholder="请输入内容" clearable></mc-input>-->
    <!--<mc-input v-model="value" type="password" placeholder="请输入内容" show-password></mc-input>-->
    <!--{{value}}-->

    <mc-select v-model="value" placeholder="请选择" @change="selectChange" filterable>
      <mc-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </mc-option>
    </mc-select>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        value: '',
        options: [{
            value: '选项1',
            label: '黄金糕',
        }, {
            value: '选项2',
            label: '双皮奶',
        }, {
            value: '选项3',
            label: '蚵仔煎',
        }, {
            value: '选项4',
            label: '龙须面',
        }, {
            value: '选项5',
            label: '北京烤鸭',
        }],
    }
  },
  methods:{
      buttonClick(event){
          console.log(event);
      },
      selectChange(val){
          console.log(val);
      }
  }
}
</script>

