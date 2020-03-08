<template>
    <li v-show="visible" @click.stop="selectOptionClick">
        <slot>
            <span>{{ currentLabel }}</span>
        </slot>
    </li>
</template>

<script>
import Emitter from '../../mixins/emitter';
export default {
    mixins: [Emitter],
    name: 'McOption',
    componentName: 'ElOption',
    inject: ['select'],
    data(){
        return{
            visible: true, // option项显示隐藏
        }
    },
    props: {
        value: { // 传入属性
            required: true,
        },
        label: [String, Number],
    },
    computed: {
        currentLabel() {
            return this.label;
        },
    },
    methods: {
        // option点击
        selectOptionClick() {
            // 向上派发的方法，用于组件跨级通信 定义在Emitter中
            this.dispatch('McSelect', 'handleOptionClick', [this, true]);
        },
        // 输入筛选
        queryChange(query) {
            this.visible = this.currentLabel.indexOf(query) !==-1;
            if (!this.visible) {
                this.select.filteredOptionsCount--;
            }
        }
    },
    created(){
        this.select.options.push(this);
        this.select.cachedOptions.push(this);

        this.$on('queryChange', this.queryChange);
    }
};
</script>

<style scoped>

</style>
