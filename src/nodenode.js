const fs=require("fs")
const data="i love jesus"
for(let i=0;i<10;i++){
    fs.writeFileSync(`./practice/file-${i}.txt`,data)
        console.log(`written file-${i}`)
}
