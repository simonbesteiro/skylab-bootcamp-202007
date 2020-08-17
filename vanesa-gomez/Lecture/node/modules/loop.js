// // // function (exports, module, require, __filename, __dirname)

// // console.log(process.env.HOME);
// const fs = require('fs');
// const path = require('path');
// const files = ['.gitconfig'];

// // Iterar sobre el array y obtener los datos del fichero
// // Queremos leer cada uno de los ficheros del array files.

// files.forEach((file) => {
// 	try {
// 		const filePath = path.resolve(process.env.HOME, file);
// 		const data = fs.readFileSync(filePath, 'utf-8');
// 		console.group('File data is', data);
// 	} catch (error) {
// 		if (error.code === 'ENOENT') {
// 			console.log('File not found!');
// 		} else {
// 			throw error;
// 		}
// 	}
// });

// //promisify -> devuelve una función en promesa

// const fs = require('fs');
// const util = require('util');

// const readFile = util.promisify(fs.readFile);

// async function main() {
// 	const data = await readFile(__filename);
// 	console.log('File data is ', data);
// }
// main();

// // otra manera async
// const { readFile } = require('fs').promises;
// async function main() {
// 	const data = await readFile(__filename);
// 	console.log(__filename, data);
// }
// main();

// console.log('Test');

const { readFile, writeFile } = require('fs').promises;
async function main() {
	try {
		const data = await readFile(__filename);
		await writeFile('newFile.js', data);
		//await writeFile(__filename + '(copy)', data);  //otra manera de crear una copia
	} catch (error) {
		//handle exceptions
		throw error;
	}
}
main();
