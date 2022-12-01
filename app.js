console.log("I am server file");

import express from 'express';
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
res.send("Ahmed Raza")
console.log(req.ip)
})

// app.get('/product/:category/:id', (req, res) => {
//     console.log(req.params)

//     const {category, id } = req.params
//     res.send(`Product Name get  ${category} ${id}`)
// })


// app.get('/brother/:name', (req, res) => {
//     console.log(req.params)
//     res.send(`Brother Name get  ${req.params.name}`)
// })

// app.get('/brother/:name/and/:class', (req, res) => {
//     console.log(req.params)
//     const {name,  em   } = req.params
//     console.log(em)
//     res.send(`Brother Name get  ${name}  ${req.params.class}`)
// })


// app.get('/train/:from-:to', (req, res) => {
//     console.log(req.params)
//     const {from , to   } = req.params
//     // console.log(em)
//     res.send(`Brother Name get  ${from}  ${to}`)
// })


// app.get('/pakistan/:province.:city', (req, res) => {
//     console.log(req.params)
//     const {province , city   } = req.params
//     // console.log(em)
//     res.send(`Brother Name get  ${province}  ${city}`)
// })

// With Regex 


// app.get('*', (req, res) => {
//     console.log(req.params)
//     res.send(`Page Not Found`)
// })

// app.get('/:type(post||article)/:id([0-9])', (req, res) => {
//     res.send(`POST`)
// })

// app.get('/product/:category/:id([0-9]{4})', (req, res) => {
//     console.log(req.params)

//     const {category, id } = req.params
//     res.send(`Product Name get  ${category} ${id}`)
// })



// app.get('/tag/:id' , (req,res)=>{
    // console.log("User With ID")
    // res.send("<h1>User With Id</h1>")
    // })
    // Array Params
//     app.param(['class','age'], (req,res,next,value)=>{
//         console.log(`Param Work   ${value}`  )
//         next()
//     } )
//     app.get('/name/:class/:age' , (req,res)=>{
//         console.log("User With ID")
// res.send("<h1>User With Id</h1>")
// })



// Query String  Example   //
https://www.youtube.com/watch?v=2GAw4RVxnr0&list=PLbGui_ZYuhigerSlDF_v1t1mM2iGomXnq&index=11

app.get('/raza' , (req,res)=>{
    console.log(req.query)
    res.send("ASF")
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
}) 