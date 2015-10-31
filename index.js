#!/usr/bin/env node

var csv = require('csv')
  , fs = require('fs')
  , iconv = require('iconv-lite');
 
module.exports = function (file, cb, encode) {
  var _encode = 'gbk';
  if (encode) {
    _encode = encode;
  }

  var parser = csv.parse({delimiter: ','}, function(err, data){
    cb(err, data);
  });

  // update_pay_status_2(pay_num)
  return fs.createReadStream(file).pipe(iconv.decodeStream(_encode)).pipe(parser);
}