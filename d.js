const axiosSavefile = require('./index');
async function r() {
  for (let j = 500; j < 600; j++) {
    try{
      await axiosSavefile({
        url: `https://placeimg.com/${j}/800/nature`,
        method: 'get',
        savePath: `./${j}-${800}.jpg`
      });
    } catch (err) {
      console.log(err);
    }
  }
}
r()