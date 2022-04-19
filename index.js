const express = require('express')
const app = express()
const path = require('path')
const port = 3000
// custom
app.use(express.static(path.join(__dirname, 'static')))
// app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  res.render('index', {
    val: {
      hero: {
        title :  'This is my first ExpresJs App',
        dis: 'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.'
      },

      serviceCards: {
        design: {
          title: "Design",
          dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' 
        },
        dev: {
          title: "Development",
          dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard' 
        },
        marketing: {
          title: "Marketing",
          dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' 
        }
      },

      acc: [
        {title: 'Design', dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
        {title: 'Development', dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
        {title: 'Marketing', dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},

      ]
     
    }
  })
})

app.get('/:userQuery', (req, res)=>{
  res.render('index', {
    val: {
      userQuery: req.params.userQuery,
      list: ['Account', 'cart', 'Login'],
      login: true,
      username: 'Nihir'
    }
  })
})
//custom  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})