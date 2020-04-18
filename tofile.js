const fs = require('fs');
const data = fs.readFileSync('./data.json');
const output = data => {
    let dataStr = "名称\t编码\t父编码\t\r\n";
    //所有的省
    dataStr = data.reduce((pre, val) => pre + val.name + "\t" + val.code + "\t" + 1 + "\r\n", dataStr);
    //所有的市
    dataStr = data.reduce((pre, val) => {
       if (val.children) {
           const aChildren = val.children.reduce((childPre, childVal) => {
               return childPre + childVal.name + "\t" + childVal.code + "\t" + val.code + "\r\n"
           }, "");
           return pre + aChildren;
       } else {
           return pre;
       }
    }, dataStr);
    //所有的区
    dataStr = data.reduce((pre, val) => {
        if (val.children) {
            const aChildren = val.children.reduce((childPre, childVal) => {
                if (childVal.children) {
                    const aaChildren = childVal.children.reduce((childChildPre, childChildVal) => {
                        return childChildPre + childChildVal.name + "\t" + childChildVal.code + "\t" + childVal.code + "\r\n";
                    }, "");
                    return childPre + aaChildren;
                } else {
                    return childPre;
                }
            }, "");
            return pre + aChildren;
        } else {
            return pre;
        }
    }, dataStr);
    console.log('解析完毕，即将生成data.txt');
    fs.writeFileSync(
        'data.txt',
        dataStr,
        function(err){
            if(err){
                console.log(err);
            }
        }
    )
};
output(JSON.parse(data));