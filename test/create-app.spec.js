import {describe, expect, it, beforeEach} from "vitest";
import {JSDOM} from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body id="root"></body></html>`);
const document = dom.window.document;
describe('死代码', () => {
  let app;
  let textNode;
  let rootEle;
  beforeEach(()=>{
  
    // 获取根元素并添加新创建的 div 元素
    rootEle = document.querySelector('#root');
    rootEle.appendChild(app);
  
    // 创建文本节点并设置值
    textNode = document.createTextNode('');
    textNode.nodeValue = 'app';
  
  })
  it('判断是否添加到了根节点',()=>{
    // 获取根元素并添加新创建的 div 元素
    expect(rootEle.querySelector('#app')).toBeTruthy();
  })
  it('是否添加了子节点到新元素中',()=>{
    // 获取根元素并添加新创建的 div 元素
    expect(rootEle.querySelector('#app')).toBeTruthy();
  })
  it('死代码', () => {

    
    const app = document.createElement('div')
    app.id = 'app'


    
    // 验证 app 元素是否已添加到 #root 内部
    const appendedApp = document.querySelector('#root > #app');
    expect(appendedApp).toBeTruthy();
    expect(appendedApp.id).toBe('app');
  });
})
