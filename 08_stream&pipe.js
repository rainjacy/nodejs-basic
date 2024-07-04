const fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/08_readMe.txt", "utf8");

// var data = "";
// myReadStream.setEncoding("utf8");
// myReadStream.on("data", function (chunk) {
//   // console.log(chunk);
//   data += chunk;
// })
// myReadStream.on("end", function () {
//   console.log(data);
// })

// var myWriteStream = fs.createWriteStream(__dirname + "/08_writeMe.txt");

// myReadStream.on("data", function (chunk) {
//   myWriteStream.write(chunk);
// })
// myReadStream.on("end", function () {
//   console.log("读取完成");
// })

// var myData = "Hello Node";
// myWriteStream.write(myData);
// myWriteStream.end();
// myWriteStream.on("finish", function () {
//   console.log("写入完成");
// })

// 管道
// myReadStream.pipe(myWriteStream);

const crypto = require("crypto");
const zlib = require("zlib");

// var password = new Buffer(process.env.PASS || "password");

// var encryptStream = crypto.createCipher("aes-256-cbc", password);
// var decryptStream = crypto.createDecipher("aes-256-cbc", password);

// var gzip = zlib.createGzip();
// var readStream = fs.createReadStream(__dirname + "/08_readMe.txt");
// var writeStream = fs.createWriteStream(__dirname + "/08_readMe.gz");
// var readStream = fs.createReadStream(__dirname + "/08_readMe.gz", "utf8");

// 压缩
// readStream
//     .pipe(encryptStream)
//     .pipe(gzip)
//     .pipe(writeStream)
//     .on("finish", function () {
//       console.log("done");
//     });

// 解压
// readStream
//     .pipe(gzip)
//     .pipe(decryptStream)
//     .pipe(process.stdout)
//     .on("finish", function () {
//       console.log("done");
//     })

// // 压缩
// // 加密相关配置
const algorithm = 'aes-256-cbc';
const password = 'strongpassword';
const key = crypto.scryptSync(password, 'salt', 32); // 32字节密钥
// const iv = crypto.randomBytes(16); // 16字节初始化向量

// // 创建读取流
// const input = fs.createReadStream(__dirname + "/08_readMe.txt");
// // 创建写入流
// const output = fs.createWriteStream(__dirname + "/08_readMe.gz");

// // 写入IV到输出文件
// output.write(iv);

// // 创建加密流
// const cipher = crypto.createCipheriv(algorithm, key, iv);
// // 创建压缩流
// const gzip = zlib.createGzip();

// // 管道：读取 -> 压缩 -> 加密 -> 写入
// input.pipe(gzip).pipe(cipher).pipe(output).on('finish', () => {
//   console.log('文件已成功压缩并加密');
// });

// 解压
// 创建读取流
const input2 = fs.createReadStream(__dirname + "/08_readMe.gz");
// 创建写入流
const output2 = fs.createWriteStream(__dirname + "/08_readMe2.txt");

// 读取IV
let iv2;
input2.once('readable', () => {
  iv2 = input2.read(16); // 前16字节是IV

  // 创建解密流
  const decipher = crypto.createDecipheriv(algorithm, key, iv2);
  // 创建解压缩流
  const gunzip = zlib.createGunzip();

  // 管道：读取 -> 解密 -> 解压缩 -> 写入
  input2.pipe(decipher).pipe(gunzip).pipe(output2).on('finish', () => {
    console.log('文件已成功解密并解压缩');
  });
});
