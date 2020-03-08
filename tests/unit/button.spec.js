import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils' // 测试vue组件
import Button from '@/packages/button/button.vue'

describe('button.vue',  () => {
    it('1.测试type传参', async() => {
        const wrapper = shallowMount(Button,{
            propsData:{
                type: 'primary'
            }
        });
        let buttonElm = wrapper.vm.$el;
        expect(buttonElm.classList.contains('mc-button-primary')).to.be.eq(true);
        wrapper.setProps({type:'warning'});
        await wrapper.vm.$nextTick();
        expect(buttonElm.classList.contains('mc-button-warning')).to.be.eq(true);

    });
    it('2.测试button能否正常显示slot里的内容',()=>{ // 测试当前组件运行在浏览器的情况
        const wrapper = shallowMount(Button,{
            slots:{
                default:'111'
            }
        });
        expect(wrapper.text()).to.eq('111');
    });
    it('3.测试按钮能否正常点击',()=>{
        const wrapper = shallowMount(Button,{
        });
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click').length).to.eq(1)
    })
});
