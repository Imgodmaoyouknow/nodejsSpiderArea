# nodejsSpiderArea
node.js获取国家统计局全国行政区数据

修正自**username-xu**的项目[node-districts](https://github.com/username-xu/node-districts)

1. 加快每次查询间隔
2. 错误重发，防止数据不完整
3. 添加tofile.js 用于把原项目生成的json文件转分隔符分隔的txt，直接复制可以兼容粘贴至Excel，方便数据库相关操作。txt文件为**名称**、**编码**、**父编码**这样的结构，可根据业务需求改写tofile.js，把数据整合成自己需要的格式。data.json为典型的children结构，扩展性强。
4. 修改文字提示为当前省级节点进度

完整查询一次大约**10分钟**，可**查询2-3次**确保结果一致性

``` bash
# 安装依赖包
npm install

# 运行程序
node main

# 导出txt
node tofile
```

附上20200418的数据，共3364条。