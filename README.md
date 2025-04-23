# npm-ts-package

> 描述

## 功能特点

- 支持 ESM
- 支持 TypeScript

## 安装

```bash
npm install @amoursun/xxx;

<script src="https://unpkg.com/@amoursun/xxx@1.0.1/dist/umd/index.min.js"></script>
<script src="https://unpkg.com/@amoursun/xxx@1.0.1/dist/umd/index.js"></script>

```

## 使用方法
```typescript
import { xxx } from '@amoursun/xxx';
```
### 引入
```
import XXX from '@amoursun/xxx';
const XXX = require('@amoursun/xxx');
<script src="https://unpkg.com/@amoursun/xxx@1.0.1/dist/umd/index.min.js"></script>
<script src="https://unpkg.com/@amoursun/xxx@1.0.1/dist/umd/index.js"></script>
```

## 配置选项

### 主要配置
| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| xx | xx | xx | xx |

## API

### 实例方法
| 方法 | 说明 |
|------|------|
| xx() | xxx |

## 浏览器兼容性

适用于支持原生 ES Modules 的浏览器

```yaml title=".browserslistrc"
chrome >= 87
edge >= 88
firefox >= 78
safari >= 14
```

## 开发

```bash
# 安装依赖
npm install

# 运行测试
npm test

# 构建
npm run build
```

## 发布
```bash
npm publish --access public --registry https://registry.npmjs.org
npm pack --dry-run # 检查打包文件结构

```

## 许可证

MIT


## 测试命令
```sh
# 交互式测试模式
npm test

# 单次运行测试
npm run test:run

# 运行测试并生成覆盖率报告
npm run test:coverage

# 运行特定测试文件
npx vitest src/utils/util-polling.test.ts

# 运行匹配特定名称的测试
npx vitest -t "checkUpdated"

# 设置测试超时时间为 10 秒
npx vitest --testTimeout 10000

# 使用 JSON 报告格式
npx vitest --reporter json

# 想要测试 src/utils 和 src/polling 文件夹，并生成覆盖率报告
npx vitest run --coverage src/utils src/polling

# 监视模式
npx vitest --watch

# 生成覆盖率报告
npx vitest --coverage

# 测试所有 utils 文件夹下的文件
npx vitest "src/**/utils/**/*.test.ts"

# 测试所有以 .test.ts 结尾的文件
npx vitest "**/*.test.ts"

```