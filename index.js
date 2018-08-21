#!/usr/bin/env node
const path = require('path');
// const fs = require('fs');
const fs = require('fs-extra');

const REDUX = 'redux';
const REDUX_TEMPLATE = 'reduxTemplate';

const main = () => {
  const here = process.argv.slice(2)[0] || process.cwd();
  const reduxFolderPath = path.join(here, REDUX);
  const reduxTemplateFolderPath = path.join(__dirname, REDUX_TEMPLATE);
  const isHere = fs.existsSync(reduxFolderPath);

  if (!isHere) {
    try {
      fs.copySync(reduxTemplateFolderPath, reduxFolderPath);
      console.log('success!');
    } catch (err) {
      console.error(err);
    }
  }
};

main();
