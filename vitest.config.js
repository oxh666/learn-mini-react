// vitest.config.js
import { defineConfig } from 'vite';
// import nodeResolve from '@vitejs/plugin-node-resolve';

export default defineConfig({
  test: {
    environment: 'jsdom', // 使用默认内置的 jsdom 环境
    setupFiles: './setup.js', // 如果需要自定义 jsdom 配置，可以在这里创建一个 setup 文件
  },
  // plugins: [nodeResolve()],
});
