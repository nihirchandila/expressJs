const express = require('express')
const res = require('express/lib/response')
const { builtinModules } = require('module')
const path = require('path')

const router = express.Router()

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../template/index.html'))
})

module.exports = router