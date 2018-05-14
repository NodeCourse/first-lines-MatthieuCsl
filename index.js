const fs = require('fs');
const file = fs.createWriteStream('./big.file');

setInterval(()=>{
	file.write(new Date().getTime() + "\r\n");
}, 1000);