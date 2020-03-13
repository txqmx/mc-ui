<template>
    <div class="mc-input">
        <input
            :type="showPassword?(passwordVisible?'text':'password'):type"
            :value="value"
            :placeholder="placeholder"
            :disabled="disabled"
            @input="handleInput"
            @focus="$emit('focus',$event.target.value)"
            @blur="$emit('blur',$event.target.value)"
            @change="$emit('change',$event)"
            ref="input"
        />
        <slot name="suffix"></slot>
        <i v-if="clearable && value"
           class="el-input__icon el-icon-circle-close el-input__clear"
           @mousedown.prevent
           @click="clear"
        ></i>
        <i v-if="showPassword && value"
           class="el-input__icon el-icon-view el-input__clear"
           @click="handlePasswordVisible"
        ></i>
    </div>
</template>

<script>
export default {
    name: "McInput",
    props: {
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: "请输入内容"
        },
        value: {
            type: String,
            default: ""
        },
        disabled: Boolean,
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            passwordVisible: false
        };
    },
    methods: {
        // 清空
        clear() {
            this.$emit('input', '');
            this.$emit('change', '');
            this.$emit('clear');
        },
        // 显示密码
        handlePasswordVisible() {
            this.passwordVisible = !this.passwordVisible;
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },
        handleInput(){
            this.$emit('input', event.target.value);
        }
    }
}
</script>

<style lang="scss">
@import "../../styles/var";
.mc-input {
    display: inline-flex;
    position: relative;
    input {
        padding: 8px;
        width: 150px;
        height: 42px;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        &:focus {
            border: 1px solid $primary;
            outline: none;
            box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
        }
        &[disabled] {
            cursor: not-allowed;
            background: #eee;
        }
    }
}
</style>
