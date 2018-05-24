# axios-savefile

#### example：
```
const axiosSaveFile = require('axios-savefile');

// 指定 savePath 后会将返回的数据保存至指定文件中，否则将走 axios 的默认规则

await axiosSaveFile({
  url: 'http://xxx.xxx/file',
  method: 'get',
  savePath: `${__dirname}/test.png`
});

```