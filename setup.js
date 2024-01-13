// setup.js
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body id="root"></body></html>`, {
  // 可以根据需要配置jsdom的行为
  url: 'http://localhost',
  runScripts: 'dangerously', // 允许执行脚本（如果项目中有）
  resources: 'usable', // 允许加载资源如图片等
});

// // 暴露给全局变量，以便在测试文件中使用
// (global as any).window = dom.window;
// (global as any).document = dom.window.document;
// (global as any).navigator = dom.window.navigator;

// 如果你的应用依赖于其他浏览器全局对象或特性，也可以在这里添加
