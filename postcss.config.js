module.exports={
    plugins:{
        "postcss-px-to-viewport":{
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 5,
            viewportUnit: 'vw',
            minPixelValue : 1,
            mediaQuery : false,
            selectorBlackList: ['tab-bar-item','tab-bar','cartbottom','all','money','ending'],
            // exclude: [/^tab-bar/]

        }
    }
}