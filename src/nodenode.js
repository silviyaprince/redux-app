const fs=require("fs")
// fs.readFile("./practice/1a.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("err⾮",err)
//     }
//     console.log("here is the file content",data)
// })
const data="hi all good day"
fs.unlink("./practice/1a.txt",(err)=>console.log("deleted"))

fs.writeFile("./practice/note-2.txt",data,(err)=>console.log("written"))

fs.readdir("./practice",(err,files)=>console.log("file names are",files))