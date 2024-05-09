const http=require('http')
const {hostname}=require('os')
const express=require('express')

const path=require('path');

// const app=http.createServer((req,res)=>{
//     res.writeHead(200,{'cntent-type':'text'})
//     res.end('hello world');
// })

const app=express()

app.get('/',(req,res)=>{
    // res.send("Hello express ")
    res.sendFile(path.join(__dirname,'public','index.html'))
})
app.get('/contactus',(req,res)=>{
    // res.send("contactus page")
    res.sendFile(path.join(__dirname,'public','contact.html'))
})
app.get('/aboutus',(req,res)=>{
    // res.send("contactus page")
    res.sendFile(path.join(__dirname,'public','about.html'))
})

app.get('/aboutus',(req,res)=>{
    res.send('aboutus page')
})

port=3004
hostname1='127.0.0.1';

app.listen(port,hostname1,()=>{
    console.log(`server started on http://${hostname1}:${port}`)
})
