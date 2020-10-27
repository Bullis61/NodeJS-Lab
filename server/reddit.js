const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../popular-articles.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);
    let redditArray = []
    
  let redditData = JSON.parse(body)
  redditData.data.children.forEach(item => {
      redditArray.push({
        title : item.data.title + '\n',
        url : item.data.url +'\n',
        author : item.data.author +'\n'
      })
      redditArray = JSON.stringify(redditArray)
      fs.writeFileSync(dataPath, redditArray + '\n')
    });
});
