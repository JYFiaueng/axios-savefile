## axios-savefile
使用 axios 实现文件下载

![npm](https://img.shields.io/npm/v/axios-savefile.svg)
![npm](https://img.shields.io/npm/dm/axios-savefile.svg)
![npm](https://img.shields.io/npm/l/axios-savefile.svg)

[![GitHub forks](https://img.shields.io/github/forks/JYFiaueng/axios-savefile.svg?style=social&label=Fork)](https://github.com/JYFiaueng/axios-savefile/fork)
[![GitHub stars](https://img.shields.io/github/stars/JYFiaueng/axios-savefile.svg?style=social&label=Star)](https://github.com/JYFiaueng/axios-savefile)

### Installation
```
npm i axios-savefile
```

### example：
```
const axiosSaveFile = require('axios-savefile');

// 指定 savePath 后会将返回的数据保存至指定文件中，否则将走 axios 的默认规则

await axiosSaveFile({
  url: 'http://xxx.xxx/file',
  method: 'get',
  savePath: `${__dirname}/test.png`
});

```