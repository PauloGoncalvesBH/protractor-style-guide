const path = require("path");

const absolutePathOfIndexFile = path.resolve(__dirname, "../samplePage/index.html");

module.exports = { BASE_URL: `file://${absolutePathOfIndexFile}` };
