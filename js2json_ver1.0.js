var fs = require("fs");
var en = require('./en.js');
var jp = require('./jp.js');
var tw = require('./tw.js');
var zh = require('./zh.js');
const input_en = {conf:{},i18n: en};
const input_jp = {conf:{},i18n: jp};
const input_tw = {conf:{},i18n: tw};
const input_zh = {conf:{},i18n: zh};
let output_en = JSON.stringify(input_en,null,"\t");
let output_jp = JSON.stringify(input_jp,null,"\t");
let output_tw = JSON.stringify(input_tw,null,"\t");
let output_zh = JSON.stringify(input_zh,null,"\t");
fs.writeFile('en.json', output_en);
fs.writeFile('jp.json', output_jp);
fs.writeFile('tw.json', output_tw);
fs.writeFile('zh.json', output_zh);
