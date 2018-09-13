# 了不起的node.js笔记

  some basic practice and demo to learn node

## Table of Contents

- [node中的js](#node-javascript)
- [命令行工具](#node-api)
- [tcp以及http](#tcp-http)
- [web开发](#node-web)
- [数据库](#node-db)
- [关于自动化测试](#node-test)

## node中的js

1.node的安装；

 在linux平台下安装node,可以直接用二进制包进行安装；也可以通过手动编译安装；

2.node repl（交互式解释器）

 在终端输入node即可，方便用于验证node api和js api是否正确；

3.node包

 node在前端领域主要有两大用途，一个是服务器端应用（主要是web,接口转发，洗数据），另一个是用于前端工程化，前端工具构建；

4.全局对象

  (1) global和process
  任何global对象上的属性都可以被全局访问到(作用域-空间)；
  所有在全局执行上下文中的内容都在process对象中(作用范围-时间)；

 （2）浏览器中负责事件相关的dom api
  addEventListener, removeEventListener, dispatchEvent;

  (3) node中暴露了Event EmitterAPI来进行事件的监听和分发；
  demo详见：[events](./node-primer/events/app.js)

5.buffer

   buffer表示的固定内存分配的全局对象（类似于字节数组），主要用于node二进制数据的处理；
   eg.可以用来对数据进行编码转换: [buffer](./node-primer/buffer/index.js)

## 命令行工具-cli(stdio以及fs)

1.process.stdio
  除非有io等待，否则node程序总会在执行完毕之后自动退出；



2.fs
  fs是node核心模块中唯一一个同时提供同步和异步api的模块;

3.stream
  当持续不断的对数据进行读写操作的时候，流的概念就产生了，在node中有很多流，比如文件流，http请求，tcp套接字等等；
  流中一个重要的概念是编码问题，对流设置编码会得到编码之后的字符串，而不是原始的buffer作为事件的参数；




## tcp以及http


## web开发



## web开发




## 数据库



## 关于自动化测试
