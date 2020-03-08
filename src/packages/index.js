import Row from './layout/row';
import Col from './layout/col';
import Button from './button/button';
import Input from './input/input';
import Select from './select/select';
import Option from './select/option';

// const components = [];

const install = (Vue) => {
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component(Select.name, Select);
    Vue.component(Option.name, Option);
    // components.forEach(component => {
    //     Vue.component(component.name, component);
    // });
};

// 有可能组件会通过script标签的方式引入
if(typeof window.Vue !== 'undefined'){
    install(Vue); // 全局直接通过script 引用方式会默认调用install方法
}

export default {
    install
}

