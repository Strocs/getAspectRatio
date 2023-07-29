import fs from 'node:fs'
import path from 'node:path'
import sizeOf from 'image-size'
import prompt from 'prompt-sync'

// TODO: Errors Management (empty input, folder inside folder)
// TODO: Fix Output (Give more structure, posibility to overwrite actual data file with updates)
// TODO: General Optimizations

const input = prompt({ sigint: true })
const folder = input('Images folder: ')

//replace white spaces with dash
function normalizeImageName(imagePath) {
	const dirName = path.dirname(imagePath)
	const imageName = path.basename(imagePath)
	const newImageName = imageName.slice().toLowerCase().replaceAll(' ', '-')
	fs.renameSync(imagePath, path.join(dirName, newImageName))
	return newImageName
}

// greatest common divisor
function GCD(a, b) {
	if (!b) return a
	return GCD(b, a % b)
}

// get Images Width and Height with his AspectRatio
function getImageInfo(imagePath) {
	const { width, height } = sizeOf(imagePath)

	const factor = GCD(width, height)

	return {
		url: path.basename(imagePath),
		size: {
			width,
			height,
			aspectRatio: `${width / factor} / ${height / factor}`,
		},
	}
}

function main(folder) {
	let groupedImages = []
	fs.readdirSync(folder).forEach(file => {
		const filePath = path.join(folder, file)
		if (fs.lstatSync(filePath).isDirectory()) {
			groupedImages = [...groupedImages, { name: file, images: main(filePath) }]
		} else {
			groupedImages = [...groupedImages, getImageInfo(filePath)]
		}
	})
	return groupedImages
}
const output = input('Output folder: ')
fs.writeFileSync(`${output}/images.data.js`, `export const imagesData = ${JSON.stringify(main(folder))}`)
