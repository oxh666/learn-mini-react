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
  const dom = el.type === 'div' ? document.createElement(el.type) : document.createTextNode('')
  
  Object.keys(el.props).forEach(key => {
    if (key !== 'children') {
      dom[key] = el.props[key]
    }
  })
  
  const children = el.props.children
  children.forEach(child => {
    render(child, dom)
  })
  container.append(dom)
  
}
const React ={
  render,
  createElement
}

export default React
