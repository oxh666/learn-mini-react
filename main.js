console.log(123132);

//1.0 死代码
//1.1
// const dom = document.createElement('div')
// dom.id = 'dom'
// document.querySelector('#root').append(dom.id)
//1.2
// const textNode = document.createTextNode('')
// textNode.noteVal = 'dom'
// dom.append(textNode)

//2.0函数重构
//2.1创建元素 obj
// const textEl = {
//   type: 'text-ele',
//   props: {
//     nodeValue: 'dom',
//     children: []
//   }
// }
// const el = {
//   type: 'div',
//   props: {
//     id: 'app',
//     children: [textEl]
//   }
// }
// const dom = document.createElement(el.type)
// dom.id = el.props.id
// document.querySelector('#root').append(dom)
// const textNode = document.createTextNode('')
// textNode.nodeValue = 'app'
// dom.append(textNode)

//2.2使用函数动态生成
// function createElement(elementType, props, ...children) {
//   return {
//     type: elementType,
//     props: {
//       ...props,
//       children: children.map(child => {
//         return typeof child === 'string' ? createTextElement(child) : child
//       })
//     }
//   }
// }

// function createTextElement(text) {
//   return {
//     type: 'text-ele',
//     props: {
//       nodeValue: text,
//       children: []
//     }
//   }
// }

// const TextEl = createTextElement('app')
// const App = createElement('div', {id: 'app'}, TextEl)
// const dom = document.createElement(App.type)
// dom.id = App.props.id
// document.querySelector('#root').append(dom)
// const textNode = document.createTextNode('')
// textNode.nodeValue = 'app'
// dom.append(textNode)

//2.3重构代码
// function render(el, container) {
//   const dom = el.type === 'div' ? document.createElement(el.type) : document.createTextNode('')
//
//   Object.keys(el.props).forEach(key => {
//     if (key !== 'children') {
//       dom[key] = el.props[key]
//     }
//   })
//
//   const children = el.props.children
//   children.forEach(child => {
//     render(child, dom)
//   })
//   container.append(dom)
//
// }

// render(App, document.querySelector('#root'))

// const ReactDOM = {
//   createRoot(container) {
//     return {
//       render() {
//         return render(App, container)
//
//       }
//     }
//   }
// }
import ReactDOM from './core/ReactDom.js'
import App from './App.js'

ReactDOM.createRoot(document.querySelector('#root')).render(App)
