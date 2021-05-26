// deno run --allow-read demos1/readFile.js

// can be used to transform the bytes to string
const decoder = new TextDecoder("utf-8");
// 路径只能从根目录开始
const data = await Deno.readFile("/Users/mac/Documents/demos/deno-demos/demos1/hello.txt");
console.log(decoder.decode(data));
