const express = require('express')
const app =express()
const port = 3000


app.listen(port, () => console.info(`Listening on port ${port}`))


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))


app.get('/',(req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/projects',(req, res) => {
    res.sendFile(__dirname + '/views/Projects.html')
})

app.get("/cv", function (req, res) {
    res.sendFile(__dirname + '/views/CV.html');
  });
  
  app.get("/about", function (req, res) {
    res.sendFile(__dirname + '/views/About-Me.html');
  });
  


