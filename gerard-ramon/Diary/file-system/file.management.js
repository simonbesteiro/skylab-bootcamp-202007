const {
	readdir,
	readdirSync,
	readFileSync,
	unlinkSync,
	writeFileSync,
	unlink
} = require('fs');

const debug = require('debug')('app:*');

const util = require('util');

module.exports = {
	createFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}

		return writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
	},
	createFileInjected: (filename, fs) => {},
	createFileSafe: (filename) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}

		try {
			return writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
		} catch (error) {
			const files = readdirSync('./data');
			const [name, extension] = filename.split('.');

			let max =
				files
					.filter((file) => file.match('/test[1-9]/'))
					.map((file) =>
						Number(file.replace(name, '').replace(`.${extension}`, ''))
					)
					.sort()
					.pop() || 0;

			const newName = `${name}${++max}.${extension}`;

			return writeFileSync(`./data/${newName}`, '', { flag: 'wx' });
		}
	},
	deleteFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}
		return unlinkSync(`./data/${filename}`);
	},
	getFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}

		return readFileSync(`./data/${filename}`);
	},
	getAllFiles: (callback) => {
		readdir('./data', callback);
	},
	getAllFilesPromise: () => {
		const readPromise = util.promisify(readdir);
		return readPromise('./data');
	},
	saveFile: (filename, contents) => {
		debug(filename);
		if (!filename) {
			throw new Error('Filename is required!');
		}

		return writeFileSync(`./data/${filename}`, contents);
	}
};
