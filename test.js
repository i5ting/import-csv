var import_csv = require('.')

import_csv('test.csv',function(err, data){
  console.log(data);
},'gbk')