# webpack
## 基本项目结构
- src文件夹：用来存放我们编写的javascript代码，可以简单的理解为用JavaScript编写的模块。
- dist文件夹：用来存放供浏览器读取的文件，这个是webpack打包成的文件。

## 第一次打包
- ```webpack {entry file} {destination for bundled file}```
- {entry file}:入口文件的路径，本文中就是src/entery.js的路径；
- {destination for bundled file}:填写打包后存放的路径。
- ```webpack src/entery.js dist/bundle.js```

