
module.exports = {
    plugins: {
        // 兼容浏览器，添加前缀
        'autoprefixer':{
            overrideBrowserslist: ['last 2 version', '>1%', 'ios 7'],
            grid: true
        }
    }
}  