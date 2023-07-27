import fs from 'node:fs'
import path from 'node:path'
import sizeOf from 'image-size'
import prompt from 'prompt-sync'

// TODO: Errors Management (empty input, folder inside folder)
// TODO: Fix Output (Give more structure, posibility to overwrite actual data file with updates)
// TODO: General Optimizations

const input = prompt({ sigint: true })

const folder = input('Copy yout images folder: ')

const filesNames = fs.readdirSync(folder)

let filesArr = []

filesNames.forEach(file => {
	const newFileName = file.slice().toLowerCase().replaceAll(' ', '-')
	const filePath = path.join(folder, file)
	const newFilePath = path.join(folder, newFileName)

	fs.renameSync(filePath, newFilePath)

	const dimensions = sizeOf(newFilePath)

	filesArr = [
		...filesArr,
		{
			url: newFileName,
			size: {
				width: dimensions.width,
				height: dimensions.height,
			},
		},
	]
})

fs.writeFileSync('./output.js', `const data = ${JSON.stringify(filesArr)}`)
