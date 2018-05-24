'use strict';

const axios = require('axios');
const fs = require('fs');

const isString = (str) => {
  return typeof str === 'string' && str !== null;
};

const API = axios.create();

API.interceptors.request.use((config) => {

  if (isString(config.savePath)) {
    config.responseType = 'stream';
    config.transformResponse = [async (data) => {
      await new Promise((resolve, reject) => {
        const writeStream = fs.createWriteStream(config.savePath);
        writeStream.on('finish', () => {
          resolve();
        });
        data.pipe(writeStream);
      });
    }];
  }

  return config;

});

module.exports = API;