#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');

const REDUX = 'redux';
const REDUX_TEMPLATE = 'reduxTemplate';

const testIfFolderNameIsCoherent = str => /^[a-z]+$/i.test(str);

const main = () => {
	const [arg1, arg2] = process.argv.slice(2);
	const here = arg1 || process.cwd();
	let folderName = REDUX;
	if (arg2 && testIfFolderNameIsCoherent(arg2)) {
		folderName = arg2;
	}

	const reduxFolderPath = path.join(here, folderName);
	const reduxTemplateFolderPath = path.join(__dirname, REDUX_TEMPLATE);
	const isHere = fs.existsSync(reduxFolderPath);

	if (!isHere) {
		try {
			fs.copySync(reduxTemplateFolderPath, reduxFolderPath);
			console.log('success !');
		} catch (err) {
			console.error(err);
		}
	} else {
		console.log('folder already exists !');
	}
};

main();
