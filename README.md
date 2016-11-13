初始化项目

```shell
npm init -y
npm install --save redux
npm install --save-dev babel-cli babel-core babel-preset-es2015
npm install --save-dev mocha chai chai-immutable immutable
npm install --save uuid
```

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
