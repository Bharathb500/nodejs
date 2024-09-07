const fs = require('fs')


const path = 'C:\\Users\\HOME\\Desktop\\nodejs\\firstproject\\text.txt'
const data = fs.readFileSync(path)
console.log(data.toString())
fs.writeFileSync(path, 'text chaged')
fs.renameSync(path, path.replace('text.txt','newtext.txt'))