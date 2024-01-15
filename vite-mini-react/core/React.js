function createElement(elementType, props, ...children) {
  return {
    type: elementType,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === 'string' ? createTextElement(child) : child
      })
    }
  }
}

function createTextElement(text) {
  return {
    type: 'text-ele',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function render(el, container) {
  nextWorkOfUnit = {
    dom: container,
    props: {
      children: [el]
    }
  }
}

//currentTask
let nextWorkOfUnit = null

function workLoop(deeLine) {
  //默认不让步
  let shouldYield = false
  
  while (!shouldYield && nextWorkOfUnit) {
    //run task
    nextWorkOfUnit = performUnitOfWork(nextWorkOfUnit)
    shouldYield = deeLine.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)

/**
 * 创建dom
 * @param type
 * @returns {*|Text}
 */
function createDom(type) {
  //1. 创建 dom
  return type === 'div'
    ? document.createElement(type)
    : document.createTextNode('')
}

/**
 * 更新 props
 * @param dom
 * @param props
 */
function updateProps(dom, props) {
  //2. 处理 props
  Object.keys(props).forEach(key => {
    if (key !== 'children') {
      dom[key] = props[key]
    }
  })
  
}

function initChildren(filber) {
  const children = filber.props.children//设置子节点
  let prevChild = null//上一个子节点
  children.forEach((child, index) => {
    const newFilber = {
      type: child.type,
      props: child.props,
      child: null,
      parent: filber,
      sabling: null,
      dom: null
    }
    //主流程，一直记录子节点
    if (index === 0) {
      filber.child = newFilber//记录子节点
    } else {
      prevChild.sibling = newFilber//记录兄弟节点
    }
    //每次循环结束时记录上一个子节点（存档）
    prevChild = newFilber
  })
}

/**
 * 执行任务函数
 * @param filber
 */
function performUnitOfWork(filber) {
  if (!filber.dom) {
    const dom = (filber.dom = createDom(filber.type))
    filber.parent.dom.append(dom)//dom创建完成后要添加到父级容器内
    updateProps(dom, filber.props)
  }
  
  //3. 转换链表，设置好指针
  initChildren(filber)
  //4. 返回下一个要执行的任务
  //这里对应了查询规则 1查儿子 2查兄弟 3查叔叔
  if (filber.child) {
    return filber.child
  }
  if (filber.sabling) {
    return filber.sabling
  }
  
  return filber.parent?.sibling
}

const React = {
  render,
  createElement
}

export default React
