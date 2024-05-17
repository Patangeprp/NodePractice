const express=require('express');

const router=express.Router();

router.post('/post',(req,res)=>{
    data=[{"id":1,"name":"prathmesh","age":21},
    data={"id":2,"name":"tom","age":15},
    data={"id":3,"name":"jerry","age":18}
 ];

    // res.send('get all from get API');
    res.send(data);
})

router.get('/getAll',(req,res)=>{
    res.send('get all from get API');
})

router.patch('/updatedData:id',()=>{
    // res.send('update data by id '+req.params.id);
    data={"id":1,"name":"prathmesh"}
    console.log(data);
    if(data.id==req.params.id){
        data.name="prp"
    }
    console.log(data);
    res.send(data);
})

router.delete('/deleteData:id',(req,res)=>{
    res.send('deleted data by id ' + req.params.id);
    
})


module.exports=router;