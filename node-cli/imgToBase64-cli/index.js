#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const imgExt = {
    '.png': true,
    '.jpeg': true
};
if(typeof process.argv[2] === "string"){
    let imgPath = process.argv[2],
        ext = path.extname(imgPath);

    if(imgExt[ext]){
        let imageData = fs.readFileSync(imgPath),
            extName = ext.slice(1),
            imageBase64 = imageData.toString("base64");

        imageBase64 = `data:image/${extName};base64,` + imageBase64;
        console.log("transfer success, result: \n", imageBase64);
        return imageBase64;
    }else {
        console.error('current file is not image');
    }
}else {
    console.error('transfer error, args is not right');
}

