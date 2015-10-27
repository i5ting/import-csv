# import-csv

Artwork by [i5ting](http://www.github.com/i5ting/).

[![Deps](https://david-dm.org/i5ting/import-csv.svg)](https://david-dm.org/i5ting/import-csv) 
[![npm](https://img.shields.io/npm/v/import-csv.svg)](https://www.npmjs.com/package/import-csv)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/i5ting/import-csv/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/import-csv.svg)](https://www.npmjs.com/package/import-csv)


## Install

    [sudo]npm install --save import-csv

## Usages

默认使用gbk编码

```
var import_csv = require('import-csv')

import_csv('test.csv',function(err, data){
  console.log(data);
})
```

指定字符编码机

```
var import_csv = require('import-csv')

import_csv('test.csv',function(err, data){
  console.log(data);
}, 'gbk')
```


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
