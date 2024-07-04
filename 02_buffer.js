// 1. alloc
// let buf = Buffer.alloc(10);
// console.log(buf);

// 2. allocUnsafe
// let buf2 = Buffer.allocUnsafe(10000);
// console.log(buf2);

// 3. from
// let buf3 = Buffer.from('Hello');
// console.log(buf3);

// 4. buffer 与字符串的转换
// let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf4.toString()); // 默认 UTF-8

// [] 操作
// let buf = Buffer.from('hello');
// console.log(buf[0].toString(2));  // 01101000
// console.log(buf);
// buf[0] = 95;
// console.log(buf.toString());

// 溢出
// let buf = Buffer.from('hello');
// buf[0] = 361; // 舍弃高位数字 0001 0110 1001 => 0110 1001
// console.log(buf);

// 中文
// let buf = Buffer.from('你好');
// console.log(buf);

