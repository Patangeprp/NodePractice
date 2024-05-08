const fs=require('fs');

fs.writeFile('textfile.txt',"this is line one text file",()=>{
    console.log('file created successfully...')
})

fs.appendFile('textfile.txt',"\nthis is line two in text file",()=>{
    console.log('file append')
})
fs.readFile('textfile.txt','utf8',(err,data)=>{
    console.log(data);
})

// fs.unlink('textfile.txt',()=>{
//     console.log("file deleted successfully...")
// })

if(fs.existsSync("textfile.txt",)){
    console.log('file exists')
}
else{
    console.log('file does not exist');
    fs.writeFile("example.txt","hello node!",()=>{
    })
}
fs.writeFile("example.txt","hello node!",()=>{
})

fs.copyFile('example.txt','textfile.txt',()=>{
    console.log('file copied successfully')
})
fs.readFile('textfile.txt','utf8',(err,data)=>{
    console.log(data);
})

fs.rename('example.txt','exampleFile.txt',()=>{
    console.log('file renamed')
})

fs.readdir('.',(err,files)=>{
    files.forEach(file=>{
        console.log(file);
    })
})

fs.mkdir('newDirectory',()=>{
    console.log('new directory created successfully')
})
