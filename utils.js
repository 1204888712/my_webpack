/*
 * @Author: liguobiao
 * @Date: 2021-07-09 12:07:28
 * @LastEditors: liguobiao
 * @LastEditTime: 2021-07-09 12:07:29
 * @FilePath: \my_webpack\utils.js
 */
// data 是新文件的内容，字符串 
// fileName是新文件的名字，字符串
module.exports.writeAFile =  function writeAFile (fileName,data ) {
    let preUrl = './'
    let str = JSON.stringify(data, null, '\t')
    let _path = preUrl + fileName
    console.log('path:', _path, __dirname, path.resolve(preUrl))
    return new Promise((resolve, reject) => {
        fs.mkdir(path.resolve(preUrl), {recursive: true}, (err) => {
            console.log('////')
            if (err) {
                //
                resolve(err)
            } else {
                fs.writeFile(_path, str, function(err) {
                    if (err) {
                        // 写入文件失败
                        //console.log('写入文件失败:', err)
                    } else {
                        // 写入文件成功
                        // console.log('写入文件成功')
                        err = {
                            code: '000000'
                        }
                    }
                    resolve(err)
                })
            }
        })
    })
}
