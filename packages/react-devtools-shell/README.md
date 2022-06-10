Harness for testing local changes to the `react-devtools-inline` and `react-devtools-shared` packages.

## Development

This target should be run in parallel with the `react-devtools-inline` package. The first step then is to run that target following the instructions in the [`react-devtools-inline` README's local development section](https://github.com/facebook/react/tree/main/packages/react-devtools-inline#local-development).

The test harness can then be run as follows:
```sh
cd packages/react-devtools-shell

yarn start
```

Once you set both up, you can view the test harness with inlined devtools in browser at http://localhost:8080/



# weda 相关

## 如何开发调试

1. 在 react 根目录运行

```sh
$ yarn build-for-devtools
```

2. 在 packages/react-devtools-inline 目录运行 

```sh
$ yarn start
```

3. 在 packages/react-devtools-shell 目录运行 

```sh
$ yarn start
```

打开 http://localhost:8080/weda.html


## 构建

构建的产物在 dist 目录，实际只需要用到 

- react-devtools-frontend.js
- react-devtools-backend.js
- react-devtools-api.js（包含以上两个的 API）

- 构建出开发调试版本的产物

```sh
$ yarn build:dev
```

- 构建出正式版本的产物

```sh
$ yarn build
```
