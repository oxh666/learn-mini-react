# 今日学习目标 ：

# 在页面中仿照 react 呈现 app

```js
import ReactDoM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getELementById("root")).render(<App/>)
```

## 课程大纲

1. vdom写死，dom渲染写死
2. vdom动态生成，dom 写死
3. vdom动态生成，dom 动态生成

## 解析、拆分大纲

1. 使用原生 js在页面中展示 app，使其结果与目标一致
2. 在保证结果正确的情况下，逐步将写死的代码换成动态生成
3. 对代码进行重构-测试-重构
4. 对代码进行抽离
5. 继续重构

## 实现步骤

### 1.输出app，初步通过测试

```js
//1. 创建容器节点
const dom = document.createElement('div')

//2. 设置属性
dom.id = 'app'

//3. 绑定到根元素上
document.querySelector('#root').append(dom.id)

//4. 创建文本节点
const textNode = document.createTextNode('')

//5. 设置属性
textNode.noteVal = 'app'

//3. 绑定到上级元素上
dom.append(textNode)
```

这一步归纳后分为了三小步，创建节点元素，设置属性、绑定到元素上。就可以实现死的不能再死的 app,可以在页面中呈现，即代表了第一步的成功。

### 2.使用函数输出

```js
//1. 创建元素 obj
const textEl = {
  type: 'text-ele',
  props: {
    nodeValue: 'dom',
    children: []
  }
}
const el = {
  type: 'div',
  props: {
    id: 'app',
    children: [textEl]
  }
}
//2. 在输出结果无误后可以使用函数返回上述 object两个
const TextEl = createTextElement('app')
const App = createElement('div', {id: 'app'}, TextEl)
const dom = document.createElement(App.type)
dom.id = App.props.id
document.querySelector('#root').append(dom)
const textNode = document.createTextNode('')
textNode.nodeValue = 'app'
dom.append(textNode)

//3. 重构代码，使用一个函数进行处理，判断 div和 textnode使用了递归处理
```

第二步初步达成了render函数的简单实现，接下来是实现目标代码中的reactdom

```js
const ReactDOM = {
  createRoot(container) {
    return {
      render() {
        return render(App, container)
      
      }
    }
  }
}
ReactDOM.createRoot(document.querySelector('#root')).render(App)
```

至此逻辑已经完全处理了,与目标越来越近，下一步即是重构和抽离

### 3.抽离

创建 React.js与 ReactDOM.js,App.js，将代码抽离至 3 个文件中，至此已完成90%

### 4.重构

安装 vite后，将代码复制到 vite创建的项目中，将 js文件修改为 jsx，但 App 目前只是变量不是组件

## 第一天总结

在花费了一定时间熟悉了逻辑点之后，发现mini-react还是以tdd开发思维进行的，对于学习了一部分单测课程的我来说这一块很容易的就接受了，拆分任务、重构、测试的操作较为熟悉，今天最大的收获应该是许久没有写原生
js稍稍复习了下，算是个良好的开头.
