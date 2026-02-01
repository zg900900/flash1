# Flash1 独立版（不依赖美团 NoCode）

本项目为独立前端应用：技术栈为 Vite + React + Tailwind CSS。已移除美团 NoCode 的网页 SDK 与 Vite 插件。

## 环境要求
- Node.js 18（建议使用 NVM）
- npm 或 pnpm/yarn

### 安装 Node.js（NVM）
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 18
nvm use 18
```

## 开发与构建
```bash
# 安装依赖
npm install

# 开发启动（默认端口 8080）
npm run dev

# 构建产物（输出到 build/）
npm run build
```

## 配置说明
- PUBLIC_PATH：用于部署子路径的 base 设置（默认 `/`）。
  - 部署到 GitHub Pages（Project Pages）建议设为 `PUBLIC_PATH="/zg900900/flash1"`。
  - 例如：
    ```bash
    PUBLIC_PATH="/zg900900/flash1" npm run build
    ```

## 部署建议
- GitHub Pages：
  - 将构建产物 `build/` 发布到 Pages。
  - 使用 Actions 自动化（参见 `.github/workflows/deploy-pages.yml`）。
- Vercel/Netlify：
  - 构建命令 `npm run build`，产出目录 `build`。
  - PUBLIC_PATH 通常保持 `/`。

## 迁移说明（从 NoCode 到独立）
- 删除 `index.html` 中的 NoCode 网页 SDK 注入脚本。
- 简化 `vite.config.js`：移除 NoCode Vite 插件与编译器逻辑。
- 删除 `hmr-client.js` 的父窗口消息联动（若无嵌入式需求）。
- 清理依赖：
  ```bash
  npm remove @meituan-nocode/vite-plugin-dev-logger @meituan-nocode/vite-plugin-nocode-html-transformer
  ```
- 保留 React + Vite + Tailwind（`tailwind.config.js` 与 `postcss.config.js` 无需修改）。

## 目录结构建议
- `src/`：入口与页面/组件
- `index.html`：页面根模板
- `build/`：构建输出
- `tailwind.config.js` / `postcss.config.js`：样式配置

## 后续增强
- 路由（`react-router-dom`）、状态管理（`Zustand/Redux Toolkit`）
- Lint（ESLint）与测试（Vitest/Jest）
- 性能与错误监控（Lighthouse CI / Sentry）
