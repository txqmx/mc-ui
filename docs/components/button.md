
# Button组件
常用的操作按钮。
## 基础用法
> 基础的按钮用法。

<demo-block>
::: slot source
<div>
    <mc-button>默认按钮</mc-button>
    <mc-button type="primary">主要按钮</mc-button>
    <mc-button type="success">成功按钮</mc-button>
    <mc-button type="info">信息按钮</mc-button>
    <mc-button type="warning">警告按钮</mc-button>
    <mc-button type="danger">危险按钮</mc-button>
</div>
:::

使用type属性来定义 Button 的样式。

::: slot highlight
```html
<div>
    <mc-button>默认按钮</mc-button>
    <mc-button type="primary">主要按钮</mc-button>
    <mc-button type="success">成功按钮</mc-button>
    <mc-button type="info">信息按钮</mc-button>
    <mc-button type="warning">警告按钮</mc-button>
    <mc-button type="danger">危险按钮</mc-button>
</div>
```
:::
</demo-block>


## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
type|类型|string|primary / success / warning / danger / info |default
