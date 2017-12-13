##初始化项目

```shell
npm init -y
npm install --save redux
npm install --save-dev babel-cli babel-core babel-preset-es2015
npm install --save-dev mocha chai chai-immutable immutable
npm install --save uuid
```

TDD 测试驱动开发

1. 先写测试
2. 再写逻辑

## 数据结构

```javascript
{
  rooms:[{
    id, name, owner
  }],
  username,
  current,
  messages: {
    id: [{
      content,user,time
    }],
    id2: [{
      content,user,time
    }]
  }
}
```

服务端：

```javascript
{
  rooms:[{
    id, name, owner
  }],
}
```

客户端：

```javascript
{
  username,
  current,
  messages: {
    id: [{
      content,user,time
    }],
    id2: [{
      content,user,time
    }]
  }
}
```

## redux

store = createStore

store.getState()
store.dispatch(action)
store.subscribe(listener)

## Express服务器和socktio

```shell
npm install --save express ejs
npm install -g babel-cli
babel-node src/server/server.js
```

babel-node 来自包 babel-cli
浏览器访问：http://localhost:3000

```shell
npm install --save socket.io
```

## Webpack

```shell
npm i -D webpack webpack-dev-server
npm i -D babel-loader babel-preset-react react-hot-loader
npm install --save react react-dom react-mixin react-redux socket.io-client
```

```shell
# 启动 webpack-dev-server
npm run start
# 启动 后台服务器
npm run startServer
```
访问 http://localhost:8080

## 配置客户端的测试

为了在 node.js 中操作 dom ，需要安装 jsdom

```shell
npm install --save-dev jsdom
```

安装 react 测试工具

```shell
npm install --save-dev react-addons-test-utils
```

跑测试

```shell
npm run testClient:watch
```

因为我们使用了 immutable.js ，所以我们可以使用  react-addons-pure-render-mixin 让react加速渲染。react-addons-pure-render-mixin 会自动为每个组件添加 componentShouldUpate 中判断 props 是否改变，只有 props 改变返回 true，组件重新渲染

```shell
npm install --save-dev react-addons-pure-render-mixin
```
## 前端的 reducer 和 aciton

后端的 reducer 之前已经写好了，他只负责新建房间和删除房间

## 前端的 store

前端有了 store 就可以将 index.js 文件内的 fakeState 移除，使用 store 的数据渲染页面

## 前端发送 action 到 server

## redux 中间件

## 后端处理前端发送过来的 action

有 bug 
