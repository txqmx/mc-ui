<template>
    <button
        class="el-button"
        :class="btnClass"
        @click="handleClick"
    >
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: "McButton",
    props:{
        type: {
            type: String,
            default: ''
        },
    },
    computed: {
        btnClass(){
            let classes = [];
            if(this.type){
                classes.push(`el-button-${this.type}`)
            }
            return classes
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style lang="scss">
@import "../../styles/var";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.el-button{
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
    &:hover{
        border-color: $border-color;
        background-color: $background;
    }
    &:focus, &:active{
        color: $active-color;
        border: 1px solid $active-color;
        background-color: $background;
        outline: none;
    }
    @each $type, $color in (primary: $primary, success: $success, info: $info, warning: $warning, danger: $danger){
        &-#{$type}{
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
            fill: #fff;
        }
    }
    @each $type, $color in (primary: $primary-hover, success: $success-hover, info: $info-hover, warning: $warning-hover, danger: $danger-hover){
        &-#{$type}:hover{
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    }
    @each $type, $color in (primary: $primary-active, success: $success-active, info: $info-active, warning: $warning-active, danger: $danger-active){
        &-#{$type}:active,&-#{$type}:focus{
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    }
}
</style>
