'use strict';

const axios = require('axios');
const fs = require('fs');

const isString = (str) => {
  return typeof str === 'string' && str !== null;
};

module.exports = async (url, savePath) => {

  if (!isString(savePath) || !isString(url)) {
    throw Error('lack parameter')
  }
  let data = await axios({
    method: 'get',
    url,
    responseType: 'stream'
  }).then(res => res.data)
  await new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(savePath)
    writeStream.on('finish', (err) => {
      if (err) reject()
      resolve()
    })
    data.pipe(writeStream)
  })
}