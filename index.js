const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, 'test-files')
console.log(process.argv)
const baseName = process.argv[2]
console.log(directoryPath)

function getSuffixName(i) {
  if(i < 10) {
    return `000${i}`
  } else if(i < 100) {
    return `00${i}`
  } else if (i < 1000) {
    return `0${i}`
  } else {
    return i
  }
}

fs.readdir(directoryPath, (err, files) => {
  let i = 1

  files.forEach(file => {
    const fileExtension = file.substr(file.lastIndexOf('.'))
    const oldName = `${directoryPath}/${file}`
    const newName = `${directoryPath}/${baseName}-${getSuffixName(i)}${fileExtension}`
    console.log({file, fileExtension, oldName,newName})
    i++
    fs.renameSync(oldName, newName)
  })
})