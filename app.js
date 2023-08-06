const express = require('express'); 
const hbs = require('hbs');
const app = express() ; 

app.use(express.static('public'))

hbs.registerPartials(__dirname + "/views/partials")


const port = process.env.PORT || 3000


app.set('view engine', 'hbs');

app.get('/'  , (req , res)=>{
    res.render('index')
})

app.get('/work'  , (req , res)=>{
    res.render('work' , {
        year : new Date().getFullYear() , 
        mounth : new Date().getMonth(), 
        day : new Date().getDate(),
    })
    
})

app.listen(port , ()=>{
    console.log(`app is running on port ${port}`)
})

