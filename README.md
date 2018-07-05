# taro-typescript-sample
taro sample in typescript: 使用Typescript和Taro开发小程序示例

## 使用指南

在使用 taro 生成 Typescript 模板以后，主要做了以下修改：

### 配置 .eslintrc

+ 加入 `"no-undef": 0,` 以解决变量`undefined`的问题
+ 加入 `"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]` 以解决 `JSX not allowed in files with extension '.tsx`

### 增加配置文件

+ tsconfig.json
+ tslint 文件

### 增加依赖库

+ tslint
+ tslint-react
+ typescript-eslint-parser

## 开始使用

```bash

yarn install

```

## 代码静态检查

```bash
yarn run lint

```

## 参考文档

+ [Taro官方文档](https://taro.aotu.io/)