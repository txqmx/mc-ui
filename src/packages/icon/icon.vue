<template>
    <svg class="mc-icon" aria-hidden="true" @click="$emit('click')">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
import '../../styles/icon'
export default {
    name:'McIcon',
    props:{
        icon:{
            type:String,
            required:true
        }
    }
}
</script>

<style lang="scss">
.mc-icon{
    width: 25px;
    height:25px;
    vertical-align: middle;
}
</style>
