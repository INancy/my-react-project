/*
 * @Author: FengZiShuo
 * @Date: 2020-08-26 14:07:51
 * @LastEditors: FengZiShuo
 * @LastEditTime: 2020-08-26 16:42:36
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

/* const el = 'React';
ReactDOM.render(
  el,
  // document.getElementById('root')获取要插入的容器
  // JSX语法: <h1>Hello World</h1>
  document.getElementById('root')
); */

// (): 如果存在标签结构，并且标签结构要换行,需要用() 括起来
/* function tick() {
  const elment = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is { new Date().toLocaleTimeString() }</h2>
    </div>
  );
  ReactDOM.render(elment,document.getElementById('root'))
};
setInterval(tick,1000) */

ReactDOM.render(<App />,document.getElementById('root'))