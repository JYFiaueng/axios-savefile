const axiosSavefile = require('../index');
const fs = require('fs');

describe('测试下载功能', async function () {

  const filePath = 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=851ae7889558d109d0eea1e0b031a7da/377adab44aed2e73d39a02da8001a18b86d6fad1.jpg';
  const tempPath = './test.jpg';

  it ('download test.png', async function () {

    try{
      await axiosSavefile(filePath, tempPath);
    } catch (err) {
      console.log(err);
    } finally {
      fs.unlinkSync(tempPath);
    }

  });

});