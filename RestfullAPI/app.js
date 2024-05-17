const express=require('express');

const app=express();

router=require('./routes/routes')

app.use(express.json());

app.use('/api',router);

app.listen(5003,()=>{
    console.log(`server started on port no ${5003}`)
})