const express = require('express')
const resize = require('./resize')

const server = express()

server.get('/',(req, res) => {
    const widthString = req.query.width
    const heightString = req.query.height
    const format = req.query.format

    let width, height
    if(widthString && heightString){
        width = parseInt(widthString)
        height = parseInt(heightString)
    }

    res.type(`image/${format || 'png'}`)
    resize('5634396_4.jpg',format, width, height).pipe(res)
})

server.listen(8000, () => {
    console.log('Server started!')
})