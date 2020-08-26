<!--
 * @Author: FengZiShuo
 * @Date: 2020-08-26 14:07:50
 * @LastEditors: FengZiShuo
 * @LastEditTime: 2020-08-26 18:20:24
-->
## React 基础知识

### JSX语法介绍
JSX语法: Javascript + XML语法
解读Jsx语法: 遇到<> 按照HTML语法解析,遇到 {} 按照 Javascript解析

### 元素渲染

### 组件
组件的后缀可以是 js,也可以是jsx

### props属性
组件的复用性很重要

### State

### React生命周期函数
函数列表:
    componentWillMount: 在组件渲染之前执行
    componentDidMount: 在组件渲染之后执行
    shouldComponentUpdate: 返回true和false，true代表允许改变，false达标不允许改变
    componentWillUpdate: 数据在改变之前执行(state,props)
    componentDidUpdate: 数据修改完成(state,props)
    componentWillReceiveProps: 父组件props发生改变
    componetWillUnmount: 组件卸载前执行

父子组件传值:

### setState 更新是同步还是异步
1、setState会引起视图的重绘
2、在可控的情况下是异步，在非可控的情况下是同步的