console.log("Hello")
const { youtube } = require('scrape-youtube');

const run = async() => {
    const { videos } = await youtube.search('Short Change Hero');
    console.log(videos)
}

run()