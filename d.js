const axiosSavefile = require('./index');
async function r() {
  try{
    for (let j = 500; j < 600; j++) {
      await axiosSavefile({
        url: `https://placeimg.com/${j}/800/nature`,
        method: 'get',
        savePath: `./${j}-${800}.jfif`
      });
    }
  } catch (err) {
    console.log(err);
  }
}
r()