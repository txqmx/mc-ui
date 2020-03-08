<template>
    <div
        @click.stop="toggleMenu"
    >
        <mc-input
            type="text"
            :disabled="disabled"
            v-model="selectedLabel"
            @keyup.native="onInputChange"
        >
            <template slot="suffix">
                <i v-if="clearable && value" class="el-select__caret el-input__icon el-icon-circle-close" @click="handleClearClick">x</i>
            </template>
        </mc-input>
        <mc-select-menu v-show="visible">
            <slot></slot>
        </mc-select-menu>
    </div>
</template>

<script>
import McSelectMenu from './select-dropdown';
import Emitter from '../../mixins/emitter';
export default {
    mixins: [Emitter],
    name: "McSelect",
    componentName: 'McSelect',
    components: { McSelectMenu},
    provide() {
        return {
            'select': this
        };
    },
    props: {
        value: {
            required: true,
        },
        disabled: Boolean, // 是否禁用
        clearable: Boolean, // 是否可以清空选项
        filterable: Boolean, // 是否可搜索
    },
    data() {
        return {
            options: [], // option实例， 在option中操作
            cachedOptions: [],
            selectedLabel: '',
            query: '', // 输入值缓存
            selected: {}, // 当前选中项
            visible: false, // 下拉框显示隐藏
        };
    },
    watch: {
        value(val, oldVal) {
            this.setSelected();
        },
    },
    created() {
        // 监听方法， 由el-option 点击触发
        this.$on('handleOptionClick', this.handleOptionSelect);
    },
    methods: {
        // 点击显示列表
        toggleMenu() {
            if (!this.disabled) {
                this.visible = !this.visible;
            }
        },
        // option 点击
        handleOptionSelect(option) {
            this.$emit('input', option.value);
            this.emitChange(option.value);
            this.visible = false;
        },
        // 触发change
        emitChange(val){
            if (this.value !== val) {
                this.$emit('change', val);
            }
        },
        // 根据value值找到所属对象
        getOption(value) {
            let option;
            for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
                const cachedOption = this.cachedOptions[i];
                const isEqual = cachedOption.value === value;
                if (isEqual) {
                    option = cachedOption;
                    break;
                }
            }
            if (option) return option;
            return {
                value: '',
                currentLabel: ''
            };
        },
        // 设置选中值 selected，根据value值找到所属对象
        setSelected() {
            let option = this.getOption(this.value); // 根据value找到选中项
            this.selectedLabel = option.currentLabel;
            this.selected = option;
        },
        // 清空
        handleClearClick(event) {
            this.deleteSelected(event);
        },
        deleteSelected(event) {
            event.stopPropagation();
            const value = '';
            this.$emit('input', value);
            this.emitChange(value);
            this.visible = false;
            this.$emit('clear');
        },
        // 键盘输入
        onInputChange(){
            if (this.filterable && this.query !== this.selectedLabel) {
                this.query = this.selectedLabel;
                this.handleQueryChange(this.query);
            }
        },
        handleQueryChange(val){
            this.broadcast('ElOption', 'queryChange', val);
        }
    },
}
</script>

<style scoped>

</style>
